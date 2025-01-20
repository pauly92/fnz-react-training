import { useContext, useEffect, useState } from 'react';
import './App.css'
import Sidebar from '@modules/todo/components/Sidebar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MainContent from '@modules/todo/components/MainContent';
import { ActiveTodoListIdContext } from '@modules/todo/context/ActiveTodoListIdContext';

function App() {
    
    const activeTodoListIdFromContext = useContext(ActiveTodoListIdContext);

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <ActiveTodoListIdContext.Provider value={activeTodoListIdFromContext}>
          <Sidebar>
          </Sidebar>
          <MainContent>
          </MainContent>
        </ActiveTodoListIdContext.Provider>
      </Box>
    )
}

export default App
