import { http, HttpResponse } from 'msw'
import { TodoItem } from '../modules/todo/components/TodoItem';
import { TodoList } from '../modules/todo/components/TodoList';

const todoitems: TodoItem[] = [
    { id: 1, title: 'Update About Page Header', category: 'Today' },
    { id: 2, title: 'About Page Wordings', category: 'Work in Progress' },
    { id: 3, title: 'Update global iconset', category: 'Backlog' },
  ];

const todoitems2: TodoItem[] = [
    { id: 1, title: 'Tomatos', category: 'Today' },
    { id: 2, title: 'Soy sauce', category: 'Work in Progress' },
    { id: 3, title: 'Garlic', category: 'Backlog' },
  ];

const todoLists: TodoList[] = [
    {id: 1, title: "Shopping", icon: "ShoppingCart", items: todoitems2},
    {id: 2, title: "Website Redesign", icon:"Work", items: todoitems},
];
 
interface GetItemsByListIdParams {
  todolistid?: string;
}

interface AddTodoListRequest {
    title: string;
    icon?: string;
}

interface AddTodoListResponse {
    id: number;
    title: string;
    icon?: string;
    items: TodoItem[];
}

export const handlers = [
    http.get('/todolists', (): HttpResponse => {
        return HttpResponse.json(todoLists);
    }),

    http.get('/todoitems/:todolistid', ({ params }: { params: GetItemsByListIdParams }): HttpResponse => {
        const listId = typeof params.todolistid === 'string' ? parseInt(params.todolistid) : undefined;

        if (listId === undefined) {
            return HttpResponse.error();
        }

        const requestedTodoList = todoLists.filter(l => l.id === listId)[0];
        return HttpResponse.json(requestedTodoList.items);
    }),

    http.post('/todolists', (req, res, ctx): HttpResponse => {
        const newTodoList = req.body as TodoList;
        todoLists.push(newTodoList);
        return res(ctx.status(201), ctx.json(newTodoList));
    })
]; 