import React, { PropsWithChildren } from 'react';
import {
    Box,
    Typography,
    Card,
    List,
} from '@mui/material';
import TodoItemComponent from './TodoItem';
import { useTodoItems } from '@modules/todo/services/TodoItemServicee';

const MainContent: React.FC<PropsWithChildren & {activeID: number}> = ({activeID}) => {
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

            <Card sx={{ padding: 2, marginTop: 2 }}>
                <List>
                    {todoItems && todoItems.map((ti) => (
                        <TodoItemComponent key={ti.id} todoItem={ti}></TodoItemComponent>
                    ))}
                </List>
            </Card>

        </Box>
    );
};

export default MainContent;