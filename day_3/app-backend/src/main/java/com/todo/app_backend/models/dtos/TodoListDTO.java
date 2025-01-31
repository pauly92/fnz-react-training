package com.todo.app_backend.models.dtos;

import com.todo.app_backend.models.entities.TodoItem;
import java.util.List;

public class TodoListDTO {
    private Long id;

    private String title;

    private String description;

    private String icon;

    private List<TodoItem> items;
}
