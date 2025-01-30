import { swrConfig, useSWR } from "@modules/core/configs/SwrConfig";
import { TodoList } from "@modules/todo/components/TodoList";

type useTodoListsReturnType = {
    todoLists: TodoList[] | undefined;
    isLoading?: boolean;
    isError?: any;
}

export const useTodoLists = (): useTodoListsReturnType => {
    const { data, error } = useSWR(`/todolists`, swrConfig);
    if (error) {
        console.error('getTodoLists error: ', error);
    }
    return<useTodoListsReturnType>{ 
        todoLists: data,
        isLoading: !error && !data,
        isError: error,
    };
}
