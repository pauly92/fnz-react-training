package com.todo.app_backend.services;

import com.todo.app_backend.models.dtos.TodoItemDTO;
import com.todo.app_backend.models.entities.Status;
import com.todo.app_backend.models.entities.TodoItem;
import com.todo.app_backend.models.entities.TodoList;
import com.todo.app_backend.models.mappers.TodoItemMapper;
import com.todo.app_backend.repositories.TodoItemRepository;
import com.todo.app_backend.repositories.TodoListRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TodoItemService {
    private final TodoItemRepository todoItemRepository;

    private final TodoListRepository todoListRepository;

    private final TodoItemMapper todoItemMapper;

    @Autowired
    public TodoItemService(TodoItemRepository todoItemRepository,
                           TodoListRepository todoListRepository,
                           TodoItemMapper todoItemMapper) {
        this.todoItemRepository = todoItemRepository;
        this.todoListRepository = todoListRepository;
        this.todoItemMapper = todoItemMapper;
    }

    public List<TodoItemDTO> getAllTodoItems(final Long listId) {
        final List<TodoItem> todoItems = todoItemRepository.findAllByTodoListId(listId);
        return todoItems.stream().map(todoItemMapper::toDTO).toList();
    }

    public TodoItemDTO getTodoItemById(final Long listId, final Long itemId) {
        final TodoItem todoItem = todoItemRepository.findByTodoListIdAndId(listId, itemId).orElseThrow();
        return todoItemMapper.toDTO(todoItem);
    }

    @Transactional
    public TodoItemDTO createTodoItem(final Long listId, final TodoItemDTO todoItemDTO) {
        final TodoItem todoItem = todoItemMapper.toEntity(todoItemDTO);
        if (todoItem.getStatus() == null) {
            todoItem.setStatus(Status.BACKLOG);
        }
        final TodoList todoList = todoListRepository.findById(listId).orElseThrow();
        todoItem.setTodoList(todoList);
        final TodoItem savedTodoItem = todoItemRepository.save(todoItem);
        return todoItemMapper.toDTO(savedTodoItem);
    }

    @Transactional
    public TodoItemDTO updateTodoItemById(final Long listId, final Long itemId, final TodoItemDTO newTodoItemDTO) {
        final TodoItem todoItem = todoItemRepository.findByTodoListIdAndId(listId, itemId).orElseThrow();
        final TodoItem newTodoItem = todoItemMapper.toEntity(newTodoItemDTO);
        BeanUtils.copyProperties(newTodoItem, todoItem, "id", "todoList");
        final TodoItem updatedTodoItem = todoItemRepository.save(todoItem);
        return todoItemMapper.toDTO(updatedTodoItem);
    }

    @Transactional
    public void deleteTodoItemById(final Long listId, final Long itemId) {
        todoItemRepository.deleteByTodoListIdAndId(listId, itemId);
    }
}
