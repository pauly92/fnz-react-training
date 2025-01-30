import ListItemButton from "@mui/material/ListItemButton";
import { TodoItem } from "./TodoItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconComponent from "@modules/core/components/Icon";
import { useNavigate } from "react-router-dom";

export interface TodoList {
    id: number,
    title: string,
    icon: string,
    items: TodoItem[]
}

type TodoListComponentProps = {
    todoList: TodoList,
    activeID?: number,
};

const TodoListComponent: React.FC<TodoListComponentProps> = ({ todoList, activeID }) => {
    let navigate = useNavigate();

    return (
        // navigate(/:id)
        <ListItemButton onClick={() => navigate(`/todolist/${todoList.id}`)}
                selected={activeID == todoList.id}>
                <ListItemIcon>
                    <IconComponent iconName={todoList.icon}></IconComponent>
                </ListItemIcon>
                <ListItemText primary={todoList.title} />
            </ListItemButton>

    );
};

export default TodoListComponent;