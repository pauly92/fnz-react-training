package com.todo.app_backend.models.mappers;

import com.todo.app_backend.models.dtos.TodoItemDTO;
import com.todo.app_backend.models.entities.TodoItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface TodoItemMapper {

    TodoItemDTO toDTO(TodoItem todoItem);

    @Mapping(target = "todoList", ignore = true)
    TodoItem toEntity(TodoItemDTO todoItemDTO);
}
