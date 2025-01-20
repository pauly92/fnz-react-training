import ListItemButton from "@mui/material/ListItemButton";
import { TodoItem } from "./TodoItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconComponent from "@modules/core/components/Icon";
import { useContext, useState } from "react";
import { ActiveTodoListIdContext } from "../context/ActiveTodoListIdContext";

export interface TodoList {
    id: number,
    title: string,
    icon: string,
    items: TodoItem[]
}

type TodoListComponentProps = {
    todoList: TodoList,
    // handleClick: React.MouseEvent<HTMLButtonElement>
    // isSelected: boolean,
};

const TodoListComponent: React.FC<TodoListComponentProps> = ({todoList}) => {
    const [activeTodoListId, setActiveTodoListId] = useState(useContext(ActiveTodoListIdContext));
    // const activeTodoListId = useContext(ActiveTodoListIdContext);
    console.log('[TodoList] activeTodoListId: ', activeTodoListId);
    
    return (
        <ListItemButton onClick={() => setActiveTodoListId(todoList.id)} 
            selected={activeTodoListId == todoList.id}>
            <ListItemIcon>
                <IconComponent iconName={todoList.icon}></IconComponent>
            </ListItemIcon>
            <ListItemText primary={todoList.title} />
        </ListItemButton>
    );
};

export default TodoListComponent;