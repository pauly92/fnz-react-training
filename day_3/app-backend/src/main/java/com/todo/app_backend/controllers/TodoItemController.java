package com.todo.app_backend.controllers;

import com.todo.app_backend.models.dtos.TodoItemDTO;
import com.todo.app_backend.services.TodoItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/todolists/{listId}/items")
public class TodoItemController {

    private final TodoItemService todoItemService;

    @Autowired
    public TodoItemController(TodoItemService todoItemService) {
        this.todoItemService = todoItemService;
    }

    @GetMapping()
    public List<TodoItemDTO> getAllTodoItems(@PathVariable final Long listId) {
        return todoItemService.getAllTodoItems(listId);
    }

    @GetMapping("/{itemId}")
    public TodoItemDTO getTodoItemById(@PathVariable final Long listId,
                                       @PathVariable final Long itemId) {
        return todoItemService.getTodoItemById(listId, itemId);
    }

    @PostMapping
    public TodoItemDTO createTodoItem(@PathVariable final Long listId,
                                      @RequestBody final TodoItemDTO todoItemDTO) {
        return todoItemService.createTodoItem(listId, todoItemDTO);
    }

    @PutMapping("/{itemId}")
    public TodoItemDTO updateTodoItemById(@PathVariable final Long listId,
                                          @PathVariable final Long itemId,
                                          @RequestBody final TodoItemDTO todoItemDTO) {
        return todoItemService.updateTodoItemById(listId, itemId, todoItemDTO);
    }

    @DeleteMapping("/{itemId}")
    public void deleteTodoItemById(@PathVariable final Long listId,
                                   @PathVariable final Long itemId) {
        todoItemService.deleteTodoItemById(listId, itemId);
    }

}
