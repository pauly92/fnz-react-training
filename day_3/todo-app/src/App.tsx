import './App.css'
import MainContent from '@modules/todo/components/MainContent';
import { Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '@modules/todo/components/Sidebar';

function App() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <Routes>
          <Route path="/todolist/:id" element={<MainContent />} />
        </Routes>
      </Box>

    </>
  );

}

// /todolistitem/:id



export default App
