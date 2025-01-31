package com.todo.app_backend.services;

import com.todo.app_backend.models.dtos.TodoListDTO;
import com.todo.app_backend.models.mappers.TodoListMapper;
import com.todo.app_backend.repositories.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoListService {

    private final TodoListRepository todoListRepository;

    private final TodoListMapper todoListMapper = TodoListMapper.INSTANCE;

    @Autowired
    public TodoListService(TodoListRepository todoListRepository) {
        this.todoListRepository = todoListRepository;
    }

    public List<TodoListDTO> getAllTodoLists() {
        return todoListRepository.findAll().stream().map(todoListMapper::toDTO).toList();
    }
}
