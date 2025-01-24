import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
  ListSubheader,
} from '@mui/material';
import TodoItemComponent, { TodoItem } from './TodoItem';
import { getTodoItemsByTodoListId } from '@modules/todo/services/TodoItemServicee';
import ActiveTodoListIdContext from '@modules/todo/context/ActiveTodoListIdContext';
import { useParams } from 'react-router-dom';


const MainContent: React.FC<PropsWithChildren> = () => {
    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
    // const {activeID} = useContext(ActiveTodoListIdContext);
    const { id } = useParams();
    const activeID = id ? parseInt(id) : 0;
    console.log('[MainContent] activeTodoListId: ', activeID);

    useEffect(() => {
        getTodoItemsByTodoListId(activeID).then(result => {
            console.log(`getTodoItemsByTodoListId(id=${activeID}) result: `, result);
            result && setTodoItems(result);
        });
    }, [activeID]);

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
            <Typography variant="h4" sx={{ mb: 2 }}>
            Website Redesign
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>

            {/* Task Sections */}
            <Box>
                <Paper>
                    {todoItems.map(ti => 
                        <TodoItemComponent key={ti.id} todoItem={ti}></TodoItemComponent>
                    )}
                </Paper>
            </Box>

        </Box> 
    );
};

export default MainContent;