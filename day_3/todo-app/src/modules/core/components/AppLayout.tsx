import Sidebar from '@modules/todo/components/Sidebar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MainContent from '@modules/todo/components/MainContent';
import ActiveTodoListIdContextProvider from '@modules/todo/provider/ActiveTodoListIdContextProvider';
import { Outlet } from 'react-router-dom';

function AppLayout() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <main>
            <Outlet />
        </main>
      </Box>
    )
}

// /todolistitem/:id



export default AppLayout
