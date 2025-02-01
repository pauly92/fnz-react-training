package com.todo.app_backend.services;

import com.todo.app_backend.models.dtos.TodoListDTO;
import com.todo.app_backend.models.entities.TodoList;
import com.todo.app_backend.models.mappers.TodoListMapper;
import com.todo.app_backend.repositories.TodoListRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class TodoListService {

    private final TodoListRepository todoListRepository;

    private final TodoListMapper todoListMapper;

    @Autowired
    public TodoListService(TodoListRepository todoListRepository, TodoListMapper todoListMapper) {
        this.todoListRepository = todoListRepository;
        this.todoListMapper = todoListMapper;
    }

    public List<TodoListDTO> getAllTodoLists() {
        final List<TodoList> todoLists = todoListRepository.findAll();
        return todoLists.stream().map(todoListMapper::toDTO).toList();
    }

    public TodoListDTO getTodoListById(final Long id) {
        final TodoList todoList = todoListRepository.findById(id).orElseThrow();
        return todoListMapper.toDTO(todoList);
    }

    public TodoListDTO createTodoList(final TodoListDTO todoListDTO) {
        final TodoList todoList = todoListMapper.toEntity(todoListDTO);
        final TodoList savedTodoList = todoListRepository.save(todoList);
        return todoListMapper.toDTO(savedTodoList);
    }

    public TodoListDTO updateTodoListById(final Long id, final TodoListDTO newTodoListDTO) {
        final TodoList todoList = todoListRepository.findById(id).orElseThrow();
        final TodoList newTodoList = todoListMapper.toEntity(newTodoListDTO);
        // Copy all properties except id and items (property from relationship)
        BeanUtils.copyProperties(newTodoList, todoList, "id", "items");
        final TodoList updatedTodoList = todoListRepository.save(todoList);
        return todoListMapper.toDTO(updatedTodoList);
    }

    public void deleteTodoListById(final Long id) {
        todoListRepository.deleteById(id);
    }
}
