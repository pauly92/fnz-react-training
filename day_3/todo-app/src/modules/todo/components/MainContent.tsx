import React, { useContext, useEffect, useState } from 'react';
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
import { LayoutComponentProps } from '@modules/core/types/LayoutComponentProps';
import TodoItemComponent, { TodoItem } from './TodoItem';
import { getTodoItemsByTodoListId } from '@modules/todo/services/TodoItemServicee';
import { ActiveTodoListIdContext } from '@modules/todo/context/ActiveTodoListIdContext';

const MainContent: React.FC<LayoutComponentProps> = () => {
    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
    const activeTodoListId = useContext(ActiveTodoListIdContext);
    console.log('[MainContent] activeTodoListId: ', activeTodoListId);

    useEffect(() => {
        getTodoItemsByTodoListId(activeTodoListId).then(result => {
            console.log(`getTodoItemsByTodoListId(id=${activeTodoListId}) result: `, result);
            result && setTodoItems(result);
        });
    }, [activeTodoListId]);

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

            {/* <Box>
            <Paper sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                Today
                </Typography>
                <List>
                <ListItem>
                    <ListItemText primary="Update About Page Header" />
                </ListItem>
                </List>
            </Paper>


            <Paper sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                Work in Progress
                </Typography>
                <List>
                <ListItem>
                    <ListItemText primary="About Page Wordings" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="New landing page layout" />
                </ListItem>
                </List>
            </Paper>


            <Paper sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                Backlog
                </Typography>
                <List>
                <ListItem>
                    <ListItemText primary="Update global iconset" />
                </ListItem>
                <ListItem>
                    <ListItemText
                    primary="New landline number in global footers & nav"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary="New case study thumbnails" />
                </ListItem>
                </List>
            </Paper>
            </Box>*/}
        </Box> 
    );
};

export default MainContent;