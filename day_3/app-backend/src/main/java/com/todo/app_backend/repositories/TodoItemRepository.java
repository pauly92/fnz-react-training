package com.todo.app_backend.repositories;

import com.todo.app_backend.models.entities.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TodoItemRepository extends JpaRepository<TodoItem, Long> {
    List<TodoItem> findAllByTodoListId(Long todoListId);
    Optional<TodoItem> findByTodoListIdAndId(Long todoListId, Long id);
    void deleteByTodoListIdAndId(Long todoListId, Long id);
}
