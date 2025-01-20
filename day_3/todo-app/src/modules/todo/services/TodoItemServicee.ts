import { api } from "@modules/core/configs/AxiosConfig";

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