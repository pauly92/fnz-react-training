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
import { useAddTodoList, useTodoLists } from '@modules/todo/services/TodoListService';
import buttonTheme from '@modules/core/themes/button';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import ModalProps from '../types/ModalProps';

// Define the type for form values
interface TodoListCreationFormValues {
    listName: string;
}

// Validation schema using Yup
const TodoListCreationFormValidationSchema = Yup.object({
    listName: Yup.string().required("List name is required"),
});


const TodoListCreationModal: React.FC<ModalProps> = (props) => {
    const { open, toggleOpen } = props

    // Form submission handler
    const handleSubmit = (
        values: TodoListCreationFormValues,
        { resetForm }: FormikHelpers<TodoListCreationFormValues>
    ): void => {
        console.log("New list created:", values);
        // todoLists && todoLists.push({
        //     id: todoLists.length + 1,
        //     title: values.listName,
        //     icon: "List",
        //     items: []
        // });
        resetForm();
        toggleOpen();
    }

    return (
        <Modal open={open} onClose={toggleOpen}>
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
                    validationSchema={TodoListCreationFormValidationSchema}
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
    );
}

export default TodoListCreationModal;