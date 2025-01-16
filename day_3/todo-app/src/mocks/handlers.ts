import { http, HttpResponse } from 'msw'
import { TodoItem } from '../modules/todo/components/TodoItem';
import { TodoList } from '../modules/todo/components/TodoList';

const todoLists: TodoList[] = [
    {id: 1, title: "Shopping", items: []},
    {id: 2, title: "Website Redesign", items: []},
];

const todoitems: TodoItem[] = [
    { id: 1, title: 'Update About Page Header', category: 'Today' },
    { id: 2, title: 'About Page Wordings', category: 'Work in Progress' },
    { id: 3, title: 'Update global iconset', category: 'Backlog' },
  ];

 
export const handlers = [
    http.get('/todolists', () => {
        return HttpResponse.json({text: "testing..."});
      }),
    http.get('/todoitems/:todolistid', ({ params }) => {
        console.log(`All todo items of the list with id=${params.todolistid} will be sent!`);
      }),
];