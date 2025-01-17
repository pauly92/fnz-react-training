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

const drawerWidth = 240;

const Sidebar: React.FC = () => {
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
    );
};

export default Sidebar;