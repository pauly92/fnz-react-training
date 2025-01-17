import { api } from "@modules/core/configs/AxiosConfig";

export const getTodoItemsByTodoListId = async (todolistid: number) => {
    try {
            const response = await api.get(`/todoitems/${todolistid}`);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
};