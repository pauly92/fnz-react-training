package com.todo.app_backend.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoListDTO {
    private Long id;

    private String title;

    private String description;

    private String icon;

}
