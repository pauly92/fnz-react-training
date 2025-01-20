import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from '@mui/material';

import { LayoutComponentProps } from '../../core/types/LayoutComponentProps';
import TodoListComponent, { TodoList } from './TodoList';
import { getTodoLists } from '../services/TodoListService';
import { ActiveTodoListIdContext } from '../context/ActiveTodoListIdContext';

const drawerWidth = 240;

const Sidebar: React.FC<LayoutComponentProps> = () => {
    const [todoLists, setTodoLists] = useState<TodoList[]>([]);   
    const activeTodoListId = useContext(ActiveTodoListIdContext); 
    console.log('[Sidebar] activeTodoListId: ', activeTodoListId);

    useEffect(() => {
        getTodoLists().then(result => {
            console.log('getTodoLists result: ', result);
            result && setTodoLists(result);
        }); 
    }, []);
    
    return (
        <Drawer variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
                width: drawerWidth, 
                boxSizing: 'border-box',
            },
        }}>
            <Box sx={{ overflow: 'auto' }}>
            <List>
                <ListItem>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Task Lists
                </Typography>
                </ListItem>
                <Divider />
                {todoLists.map(tl => 
                    <TodoListComponent 
                        key={tl.id}
                        todoList={tl} > 
                    </TodoListComponent>)
                }
            </List>
            </Box>
      </Drawer>
    );
};

export default Sidebar;