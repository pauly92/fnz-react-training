import React, { PropsWithChildren, useState } from 'react';
import {
    Box,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    Modal,
    ThemeProvider,
    Typography,
    TextField,
} from '@mui/material';
import * as Yup from 'yup';

import TodoListComponent from '@modules/todo/components/TodoList';
import { useTodoLists } from '@modules/todo/services/TodoListService';
import buttonTheme from '@modules/core/themes/button';
import { Field, Form, Formik, FormikHelpers } from 'formik';

const drawerWidth = 240;

// Define the type for form values
interface FormValues {
    listName: string;
}

// Validation schema using Yup
const validationSchema = Yup.object({
    listName: Yup.string().required("List name is required"),
});

const Sidebar: React.FC<PropsWithChildren & { activeID: number }> = ({ activeID }) => {

    const { todoLists } = useTodoLists();

    const [open, setOpen] = useState<boolean>(false);

    // Modal handlers
    const handleOpen = (): void => setOpen(true);
    const handleClose = (): void => setOpen(false);

    // Form submission handler
    const handleSubmit = (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ): void => {
        console.log("New list created:", values);
        resetForm();
        handleClose();
    };


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
                    onClick={handleOpen}
                >
                    <Typography variant="body1" >
                        Add list
                    </Typography>
                </Button>

                <Modal open={open} onClose={handleClose}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 400,
                            bgcolor: "background.paper",
                            borderRadius: 2,
                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        <Typography variant="h6" component="h2" mb={2}>
                            Create New List
                        </Typography>
                        <Formik
                            initialValues={{ listName: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <Field
                                        as={TextField}
                                        name="listName"
                                        label="List Name"
                                        variant="outlined"
                                        fullWidth
                                        error={touched.listName && Boolean(errors.listName)}
                                        helperText={touched.listName && errors.listName}
                                        margin="normal"
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ mt: 2 }}
                                    >
                                        Create List
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Modal>

            </Drawer>
        </ThemeProvider>
    );
};

export default Sidebar;
//#B7B7B7