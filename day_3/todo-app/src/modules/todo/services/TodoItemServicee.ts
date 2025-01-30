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
    return <useTodoItemsReturnType>{
        todoItems: data,
        isLoading: !error && !data,
        isError: error,
    };
}