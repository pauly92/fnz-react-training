package com.todo.app_backend.models.mappers;

import com.todo.app_backend.models.dtos.TodoListDTO;
import com.todo.app_backend.models.entities.TodoList;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface TodoListMapper {

    @Mapping(target = "icon", expression = "java(todoList.getIcon().label)")
    TodoListDTO toDTO(TodoList todoList);

    @Mapping(target = "icon", expression = "java(com.todo.app_backend.models.entities.Icon.valueOf(todoListDTO.getIcon().toUpperCase()))")
    @Mapping(target = "items", ignore = true)
    TodoList toEntity(TodoListDTO todoListDTO);
}
