import React, { PropsWithChildren, useState } from 'react';
import {
    Box,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ThemeProvider,
    Typography,
} from '@mui/material';

import TodoListComponent from '@modules/todo/components/TodoList';
import { useTodoLists } from '@modules/todo/services/TodoListService';
import buttonTheme from '@modules/core/themes/button';
import TodoListCreationModal from '@modules/todo/components/TodoListCreationModal';

const drawerWidth = 240;

const TodoListContainer: React.FC<PropsWithChildren & { activeID: number }> = ({ activeID }) => {

    const { todoLists } = useTodoLists();

    const [openListCreationModal, setOpenListCreationModal] = useState<boolean>(false);
    const toggleListCreationModal = (): void => setOpenListCreationModal(!openListCreationModal);

    return (
        <ThemeProvider theme={buttonTheme}>
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

                <Button
                    variant="outlined"
                    color='primary'
                    style={{
                        position: "absolute",
                        bottom: "16px",
                        left: "16px",
                        right: "16px",
                    }}
                    onClick={toggleListCreationModal}
                >
                    <Typography variant="body1" >
                        Add list
                    </Typography>
                </Button>

                <TodoListCreationModal
                    open={openListCreationModal}
                    toggleOpen={toggleListCreationModal}
                />
            </Drawer>
        </ThemeProvider>
    );
};

export default TodoListContainer;
//#B7B7B7