import {
    Box,
    Button,
    Modal,
    Typography,
    TextField,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';


import { Field, Form, Formik, FormikHelpers } from 'formik';
import ModalProps from '@modules/todo/types/ModalProps';
import { TodoListCreationForm, TodoListCreationFormValidationSchema, TodoListIcons } from '@modules/todo/types/TodoListCreation';

const TodoListCreationModal: React.FC<ModalProps> = (props) => {
    const { open, toggleOpen } = props

    const handleListCreationFormSubmit = (
        values: TodoListCreationForm,
        { resetForm }: FormikHelpers<TodoListCreationForm>
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

    // Icon selection handler
    const handleIconChange = (
        event: SelectChangeEvent<string>,
        setFieldValue: (field: string, value: any) => void
    ): void => {
        console.log("Icon selected:", event.target.value);
        const { name, value } = event.target;
        setFieldValue(name || "icon", value as string);
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
                    initialValues={{ listName: "", icon: TodoListIcons[0] }}
                    validationSchema={TodoListCreationFormValidationSchema}
                    onSubmit={handleListCreationFormSubmit}
                >
                    {({ errors, touched, values, setFieldValue }) => (
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
                            <Select
                                name="icon"
                                value={values.icon}
                                onChange={(event) => handleIconChange(event, setFieldValue)}
                                variant="outlined"
                                fullWidth
                                displayEmpty
                                sx={{ mt: 2 }}
                            >
                                {TodoListIcons.map((icon) => (
                                    <MenuItem key={icon} value={icon}>
                                        {/* <IconComponent iconName={icon} /> */}
                                        {icon}
                                    </MenuItem>
                                ))}
                            </Select>
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