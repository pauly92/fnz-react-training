import React, { PropsWithChildren, useState } from 'react';
import {
    Box,
    Typography,
    Card,
    List,
    Fab,
    ThemeProvider,
    Modal,
    Button,
    TextField,
} from '@mui/material';
import TodoItemComponent, { TodoItem } from '@modules/todo/components/TodoItem';
import * as Yup from 'yup';
import { useTodoItems } from '@modules/todo/services/TodoItemServicee';
import AddIcon from '@mui/icons-material/Add';
import buttonTheme from '@modules/core/themes/button';
import { Field, Form, Formik, FormikHelpers } from 'formik';

interface TodoItemCreationFormValues {
    title: string;
    dueDate?: string;
}

const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    // dueDate: Yup.date().required("Due date is required"),
});

const MainContent: React.FC<PropsWithChildren & { activeID: number }> = ({ activeID }) => {
    const { todoItems } = useTodoItems(activeID);

    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (values: TodoItemCreationFormValues, { resetForm }: FormikHelpers<TodoItemCreationFormValues>) => {
        console.log("New Todo Item:", values);
        alert(`Todo Item Added: ${JSON.stringify(values, null, 2)}`);
        resetForm();
        handleClose();
    };

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
                    onClick={handleOpen}
                    sx={{
                        position: "fixed",
                        bottom: 16,
                        right: 16,
                    }}
                >
                    <AddIcon />
                </Fab>

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
                        <Typography variant="h6" mb={2}>
                            Add New To-Do Item
                        </Typography>

                        {/* Formik Form */}
                        <Formik
                            initialValues={{ title: "", dueDate: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    {/* Title Field */}
                                    <Field
                                        as={TextField}
                                        name="title"
                                        label="Title"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        error={touched.title && Boolean(errors.title)}
                                        helperText={touched.title && errors.title}
                                    />

                                    {/* Due Date Field */}
                                    <Field
                                        as={TextField}
                                        name="dueDate"
                                        label="Due Date"
                                        type="date"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        error={touched.dueDate && Boolean(errors.dueDate)}
                                        helperText={touched.dueDate && errors.dueDate}
                                    />

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ mt: 2 }}
                                    >
                                        Add Todo
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Modal>

            </Box>
        </ThemeProvider>

    );
};

export default MainContent;