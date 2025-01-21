import './App.css'
import Sidebar from '@modules/todo/components/Sidebar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MainContent from '@modules/todo/components/MainContent';
import ActiveTodoListIdContextProvider from '@modules/todo/provider/ActiveTodoListIdContextProvider';

function App() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <ActiveTodoListIdContextProvider>
          <Sidebar />
          <MainContent />
        </ActiveTodoListIdContextProvider>
      </Box>
    )
}

// /todolistitem/:id



export default App
