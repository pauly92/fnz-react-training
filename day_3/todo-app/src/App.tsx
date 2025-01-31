import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import AppLayout from '@modules/core/components/AppLayout';

function App() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Routes>
          <Route path="/">
            <Route element={<Navigate replace to='/todolist/1'/>} index />
          </Route>
          <Route path="/todolist/:id" element={<AppLayout />} />
        </Routes>
      </Box>

    </>
  );

}

export default App
