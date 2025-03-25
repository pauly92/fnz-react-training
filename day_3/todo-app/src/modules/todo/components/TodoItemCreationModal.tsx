import {
    Box,
    Typography,
    Modal,
    Button,
    TextField,
} from '@mui/material';
import * as Yup from 'yup';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import ModalProps from "@modules/todo/types/ModalProps";

interface TodoItemCreationFormValues {
    title: string;
    dueDate?: string;
}

const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    // dueDate: Yup.date().required("Due date is required"),
});


const TodoItemCreationModal: React.FC<ModalProps> = ( props ) => {   
    const { open, toggleOpen } = props

    const handleSubmit = (values: TodoItemCreationFormValues, { resetForm }: FormikHelpers<TodoItemCreationFormValues>) => {
        console.log("New Todo Item:", values);
        alert(`Todo Item Added: ${JSON.stringify(values, null, 2)}`);
        resetForm();
        toggleOpen();
    };

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
    );
}

export default TodoItemCreationModal;