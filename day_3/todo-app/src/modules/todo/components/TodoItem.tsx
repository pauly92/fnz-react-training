import { FormControlLabel, Radio } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";

export interface TodoItem {
    id: number;
    title: string;
    category: string;
}

type TodoItemComponentProps = {
    todoItem: TodoItem
};

const TodoItemComponent: React.FC<TodoItemComponentProps> = ({ todoItem }) => {

    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <ListItem key={todoItem.id} disablePadding>
            <FormControlLabel
                control={
                    <Radio
                        checked={selectedValue === todoItem.title}
                        onChange={handleChange}
                        value={todoItem.title}
                        color="primary"
                    />
                }
                label={todoItem.title}
                sx={{
                    width: '100%',
                    justifyContent: 'space-between',
                    '& .MuiFormControlLabel-label': { flex: 1, textAlign: 'left' },
                }}
            />
        </ListItem>
    );
};

export default TodoItemComponent;