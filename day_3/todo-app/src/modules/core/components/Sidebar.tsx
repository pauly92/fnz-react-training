import React, { useEffect, useState } from 'react';
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
  ListSubheader,
} from '@mui/material';

import { getTodoLists } from '@modules/todo/services/TodoListService';
import TodoListComponent, { TodoList } from '@modules/todo/components/TodoList';
import { api } from '@modules/core/configs/AxiosConfig';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
    const [todoLists, setTodoLists] = useState<TodoList[]>([]);

    useEffect(() => {
        getTodoLists().then(result => {
            console.log('result: ', result);
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
                
                {todoLists.map(tl => <TodoListComponent key={tl.id} todoList={tl}></TodoListComponent>)}
                

                {/* <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Shopping List" />
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Dänemark" />
                </ListItemButton> */}
            </List>
            </Box>
      </Drawer>
    );
};

export default Sidebar;