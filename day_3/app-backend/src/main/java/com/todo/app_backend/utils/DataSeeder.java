package com.todo.app_backend.utils;

import com.todo.app_backend.models.entities.Icon;
import com.todo.app_backend.models.entities.Status;
import com.todo.app_backend.models.entities.TodoItem;
import com.todo.app_backend.models.entities.TodoList;
import com.todo.app_backend.repositories.TodoListRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class DataSeeder  implements CommandLineRunner {
    private final TodoListRepository todoListRepository;

    public DataSeeder(TodoListRepository todoListRepository) {
        this.todoListRepository = todoListRepository;
    }

    @Override
    public void run(String... args) throws Exception {
//        todoListRepository.deleteAll();
        if(todoListRepository.count() == 0) {
            log.info("Seeding data...");
            TodoList todoList1 = TodoList.builder().title("Shopping").icon(Icon.SHOPPINGCART).build();
            List<TodoItem> items1 = List.of(
                    TodoItem.builder().title("milk").status(Status.BACKLOG).todoList(todoList1).build(),
                    TodoItem.builder().title("bread").status(Status.BACKLOG).todoList(todoList1).build()
            );
            todoList1.setItems(items1);

            TodoList todoList2 = TodoList.builder().title("Website Redesign").icon(Icon.WORK).build();
            List<TodoItem> items2 = List.of(
                    TodoItem.builder().title("Homepage").status(Status.BACKLOG).todoList(todoList2).build(),
                    TodoItem.builder().title("About Us").status(Status.BACKLOG).todoList(todoList2).build(),
                    TodoItem.builder().title("Contact Us").status(Status.BACKLOG).todoList(todoList2).build()
            );
            todoList2.setItems(items2);

            todoListRepository.saveAll(List.of(todoList1, todoList2));
            log.info("✅ Sample data inserted successfully!");
        } else {
            log.info("✅ Database already initialized. Skipping data insertion.");
        }
    }
}
