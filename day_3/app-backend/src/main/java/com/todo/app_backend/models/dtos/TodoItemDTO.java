package com.todo.app_backend.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoItemDTO {
    private Long id;

    private String title;

    private String description;

    private String status;

    private LocalDateTime dueAt;

}
