import { api } from "@modules/core/configs/AxiosConfig";
import { swrConfig, useSWR } from "@modules/core/configs/SwrConfig";
import { TodoItem } from "@modules/todo/components/TodoItem";

type useTodoItemsReturnType = {
    todoItems: TodoItem[] | undefined;
    isLoading?: boolean;
    isError?: any;
}

export const useTodoItems = (todolistid: number): useTodoItemsReturnType => {
    const { data, error } = useSWR(`/todoitems/${todolistid}`, swrConfig);
    if (error) {
        console.error('getTodoItems error: ', error);
    }
    console.log('getTodoItems response: ', data);
    return <useTodoItemsReturnType>{
        todoItems: data,
        isLoading: !error && !data,
        isError: error,
    };
}

export const getTodoItemsByTodoListId = async (todolistid: number) => {
    try {
            const response = await api.get(`/todoitems/${todolistid}`);
            console.log('getTodoItemsByTodoListId response: ', response);
            const data = await response.data;
            return data;
        } catch (error) {
            console.log(error);
        }
}; 