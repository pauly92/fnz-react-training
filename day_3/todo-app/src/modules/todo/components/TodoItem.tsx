import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export interface TodoItem {
    id: number;
    title: string;
    category: string;
  }

type TodoItemComponentProps = {
      todoItem: TodoItem
  };

const TodoItemComponent: React.FC<TodoItemComponentProps> = ({todoItem}) => {
    return (
        <List>
            <ListItem>
                <ListItemText primary={todoItem.title} />
            </ListItem>
        </List>
    );
};

export default TodoItemComponent;