import React from 'react';
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';
import { getTodoLists } from '@modules/todo/services/TodoListService';
import { getTodoItemsByTodoListId } from '@modules/todo/services/TodoItemServicee';

const drawerWidth = 240;

const TodoAppLayout: React.FC = () => {

    getTodoLists();
    getTodoItemsByTodoListId(1);

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* sidebar - display TodoList */}
        <Drawer
            variant="permanent"
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
                <ListItemButton>
                <ListItemIcon>
                    <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Website Redesign" />
                </ListItemButton>
                <ListItemButton>
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
                </ListItemButton>
            </List>
            </Box>
        </Drawer>

        {/* Main Content - todo items of a list */}
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
            {/* Today Section */}
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

            {/* Work in Progress Section */}
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

            {/* Backlog Section */}
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
            </Box>
        </Box>
        </Box>
    );
}

export default TodoAppLayout;