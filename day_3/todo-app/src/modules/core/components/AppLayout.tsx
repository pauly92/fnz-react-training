import TodoListContainer from '@modules/todo/components/TodoListContainer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TodoItemContainer from '@modules/todo/components/TodoItemContainer';
import { useParams } from 'react-router-dom';

function AppLayout() {

  const { id } = useParams();
  const activeID = id ? parseInt(id) : 0;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TodoListContainer activeID={activeID} />
      <TodoItemContainer activeID={activeID} />
    </Box>
  )
}

// /todolistitem/:id



export default AppLayout
