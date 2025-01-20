import { useContext, useEffect, useState } from 'react';
import './App.css'
import TodoListComponent, { TodoList } from '@modules/todo/components/TodoList';
import { ActiveTodoListIdContext } from '@modules/todo/context/ActiveTodoListIdContext';
import { getTodoLists } from '@modules/todo/services/TodoListService';
import Sidebar from '@modules/core/components/Sidebar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MainContent from '@modules/core/components/MainContent';
import TodoItemComponent, { TodoItem } from '@modules/todo/components/TodoItem';
import { getTodoItemsByTodoListId } from '@modules/todo/services/TodoItemServicee';
// import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'

function App() {

    const [todoLists, setTodoLists] = useState<TodoList[]>([]);
    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
    const activeTodoListId = useContext(ActiveTodoListIdContext);

    useEffect(() => {
        getTodoLists().then(result => {
            console.log('getTodoLists result: ', result);
            result && setTodoLists(result);
        }); 
        getTodoItemsByTodoListId(activeTodoListId).then(result => {
            console.log(`getTodoItemsByTodoListId(id=${activeTodoListId}) result: `, result);
            result && setTodoItems(result);
        });
    }, []);

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar>
          {todoLists.map(tl => 
              <TodoListComponent 
                  key={tl.id}
                  todoList={tl} 
                  activeTodoListId={activeTodoListId}>
              </TodoListComponent>)}
        </Sidebar>
        <MainContent>
          {todoItems.map(ti => 
            <TodoItemComponent key={ti.id} todoItem={ti}></TodoItemComponent>
          )}
        </MainContent>
      </Box>
    )
}

export default App
