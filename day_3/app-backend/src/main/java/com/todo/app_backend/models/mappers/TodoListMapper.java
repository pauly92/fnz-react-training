package com.todo.app_backend.models.mappers;

import com.todo.app_backend.models.dtos.TodoListDTO;
import com.todo.app_backend.models.entities.TodoList;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TodoListMapper {
    TodoListMapper INSTANCE = Mappers.getMapper(TodoListMapper.class);

    @Mapping(target = "icon", ignore = true)
    TodoListDTO toDTO(TodoList todoList);

    @Mapping(target = "icon", ignore = true)
    TodoList toEntity(TodoListDTO todoListDTO);
}
