import React, { PropsWithChildren } from 'react';
import {
  Box,
  Typography,
  Paper,
} from '@mui/material';
import TodoItemComponent from './TodoItem';
import { useTodoItems } from '@modules/todo/services/TodoItemServicee';
import { useParams } from 'react-router-dom';


const MainContent: React.FC<PropsWithChildren> = () => {
    const { id } = useParams();
    const activeID = id ? parseInt(id) : 0;
    console.log('[MainContent] activeTodoListId: ', activeID);

    const { todoItems } = useTodoItems(activeID);


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
                    {todoItems && todoItems.map(ti => 
                        <TodoItemComponent key={ti.id} todoItem={ti}></TodoItemComponent>
                    )}
                </Paper>
            </Box>

        </Box> 
    );
};

export default MainContent;