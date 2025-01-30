import React, { PropsWithChildren } from 'react';
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    Typography,
} from '@mui/material';

import TodoListComponent from '@modules/todo/components/TodoList';
import { useTodoLists } from '@modules/todo/services/TodoListService';

const drawerWidth = 240;

const Sidebar: React.FC<PropsWithChildren & {activeID: number}> = ({activeID}) => {

    const { todoLists } = useTodoLists();

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
                    {todoLists && todoLists.map(tl =>
                        <TodoListComponent
                            key={tl.id}
                            todoList={tl} 
                            activeID={activeID}>
                        </TodoListComponent>)
                    }
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;