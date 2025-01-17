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
 
export const handlers = [
    http.get('/todolists', () => {
        return HttpResponse.json(todoLists);
      }),

    http.get('/todoitems/:todolistid', ({ params }) => {
        const listId = typeof params.todolistid === 'string' ? parseInt(params.todolistid) : undefined;

        if(listId === undefined) {
            return HttpResponse.error();
        }

        const requestedTodoList = todoLists.filter(l => l.id === listId)[0];
        return HttpResponse.json(requestedTodoList.items);
        
      }),
]; 