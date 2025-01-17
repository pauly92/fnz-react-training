import React from 'react';
import {
  Box,
  CssBaseline,
} from '@mui/material';

import { getTodoLists } from '@modules/todo/services/TodoListService';
import { getTodoItemsByTodoListId } from '@modules/todo/services/TodoItemServicee';
import Sidebar from './Sidebar';
import MainContent from './MainContent';



const TodoAppLayout: React.FC = () => {

    getTodoLists();
    getTodoItemsByTodoListId(1);

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Sidebar></Sidebar>

        <MainContent></MainContent>
        
        </Box>
    );
}

export default TodoAppLayout;