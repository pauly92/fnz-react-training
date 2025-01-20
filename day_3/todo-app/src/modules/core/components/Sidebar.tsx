import React from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from '@mui/material';

import { LayoutComponentProps } from '../types/LayoutComponentProps';

const drawerWidth = 240;

const Sidebar: React.FC<LayoutComponentProps> = ({children}) => {
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
                {children}
            </List>
            </Box>
      </Drawer>
    );
};

export default Sidebar;