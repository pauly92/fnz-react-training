import ListItemButton from "@mui/material/ListItemButton";
import { TodoItem } from "./TodoItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconComponent from "@modules/core/components/Icon";
import { useContext, useState } from "react";
import ActiveTodoListIdContext from "../context/ActiveTodoListIdContext";

export interface TodoList {
    id: number,
    title: string,
    icon: string,
    items: TodoItem[]
}

type TodoListComponentProps = {
    todoList: TodoList,
};

const TodoListComponent: React.FC<TodoListComponentProps> = ({todoList}) => {
    const {activeID, setActiveID} = useContext(ActiveTodoListIdContext);
    console.log('[TodoList] activeTodoListId: ', activeID);
    
    return (
        // navigate(/:id)
        <ListItemButton onClick={() => setActiveID && setActiveID(todoList.id)} 
            selected={activeID == todoList.id}>
            <ListItemIcon>
                <IconComponent iconName={todoList.icon}></IconComponent>
            </ListItemIcon>
            <ListItemText primary={todoList.title} />
        </ListItemButton>
    );
};

export default TodoListComponent;