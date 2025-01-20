import { api } from "@modules/core/configs/AxiosConfig";
import { TodoList } from "@modules/todo/components/TodoList";

export const getTodoLists= async () => {

    try {
        const response = await api.get('/todolists');
        console.log('getTodoLists response: ', response);
        const data: TodoList[] = await response.data;
        return data;
    } catch (error) {
        console.log(error);
    }

    // api.get('/todolists')
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });

};
