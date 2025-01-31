package com.todo.app_backend.models.dtos;

import com.todo.app_backend.models.entities.TodoList;
import jakarta.persistence.*;

import java.time.LocalDateTime;

public class TodoItemDTO {
    private Long id;

    private String title;

    private String description;

    private String status;

    private LocalDateTime dueAt;

    private TodoList todoList;
}
