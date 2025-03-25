import * as Yup from 'yup';

// Define the type for form values
export interface TodoListCreationForm {
    listName: string;
    icon: TodoListIcon;
}

// Validation schema using Yup
export const TodoListCreationFormValidationSchema = Yup.object({
    listName: Yup.string().required("List name is required"),
});

export const TodoListIcons = ["AddAlarm", "BeachAccess", "Clock", "FitnessCenter", "FormatListBulleted", "ShoppingCart", "Work"];
export type TodoListIcon = typeof TodoListIcons[number];