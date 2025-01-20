import React from 'react';
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
import { LayoutComponentProps } from '../types/LayoutComponentProps';

const MainContent: React.FC<LayoutComponentProps> = ({children}) => {
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
                    {children}
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