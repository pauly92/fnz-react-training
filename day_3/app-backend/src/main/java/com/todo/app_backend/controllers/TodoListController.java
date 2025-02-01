package com.todo.app_backend.controllers;

import com.todo.app_backend.models.dtos.TodoListDTO;
import com.todo.app_backend.services.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todolists")
public class TodoListController {

    private final TodoListService todoListService;

    @Autowired
    public TodoListController(TodoListService todoListService) {
        this.todoListService = todoListService;
    }

    @GetMapping
    public List<TodoListDTO> getAllTodoLists() {
        return todoListService.getAllTodoLists();
    }

    @GetMapping("/{id}")
    public TodoListDTO getTodoListById(@PathVariable final Long id) {
        return todoListService.getTodoListById(id);
    }

    @PostMapping
    public TodoListDTO createTodoList(@RequestBody final TodoListDTO todoListDTO) {
        return todoListService.createTodoList(todoListDTO);
    }

    @PutMapping("/{id}")
    public TodoListDTO updateTodoListById(@PathVariable final Long id, @RequestBody final TodoListDTO todoListDTO) {
        return todoListService.updateTodoListById(id, todoListDTO);
    }
}
