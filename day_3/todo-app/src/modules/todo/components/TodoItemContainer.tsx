import React, { PropsWithChildren, useState } from 'react';
import {
    Box,
    Typography,
    Card,
    List,
    Fab,
    ThemeProvider,
} from '@mui/material';
import TodoItemComponent from '@modules/todo/components/TodoItem';
import { useTodoItems } from '@modules/todo/services/TodoItemServicee';
import AddIcon from '@mui/icons-material/Add';
import buttonTheme from '@modules/core/themes/button';
import TodoItemCreationModal from './TodoItemCreationModal';

const TodoItemContainer: React.FC<PropsWithChildren & { activeID: number }> = ({ activeID }) => {
    const { todoItems } = useTodoItems(activeID);

    const [openItemCreationModal, setOpenItemCreationModal] = useState<boolean>(false);
    const toggleItemCreationModal = (): void => setOpenItemCreationModal(!openItemCreationModal);

    return (
        <ThemeProvider theme={buttonTheme}>
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

                <Card sx={{ padding: 2, marginTop: 2 }}>
                    <List>
                        {todoItems && todoItems.map((ti) => (
                            <TodoItemComponent key={ti.id} todoItem={ti}></TodoItemComponent>
                        ))}
                    </List>
                </Card>

                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={toggleItemCreationModal}
                    sx={{
                        position: "fixed",
                        bottom: 16,
                        right: 16,
                    }}
                >
                    <AddIcon />
                </Fab>

                <TodoItemCreationModal open={openItemCreationModal} toggleOpen={toggleItemCreationModal} />

            </Box>
        </ThemeProvider>

    );
};

export default TodoItemContainer;