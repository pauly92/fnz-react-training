import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from '@mui/material';

import TodoListComponent, { TodoList } from '@modules/todo/components/TodoList';
import { getTodoLists } from '@modules/todo/services/TodoListService';

const drawerWidth = 240;

const Sidebar: React.FC<PropsWithChildren> = () => {
    const [todoLists, setTodoLists] = useState<TodoList[]>([]);   

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