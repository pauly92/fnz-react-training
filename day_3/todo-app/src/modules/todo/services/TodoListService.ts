import { api } from "../../core/configs/AxiosConfig";

export const getTodoLists = async () => {

    try {
        const response = await api.get('/todolists');
        console.log(response);
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
