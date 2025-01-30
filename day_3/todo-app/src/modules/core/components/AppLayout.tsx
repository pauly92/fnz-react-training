import Sidebar from '@modules/todo/components/Sidebar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MainContent from '@modules/todo/components/MainContent';
import { Outlet, useParams } from 'react-router-dom';

function AppLayout() {

  const { id } = useParams();
  const activeID = id ? parseInt(id) : 0;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar activeID={activeID} />
      <MainContent activeID={activeID} />
      {/* <main>
            <Outlet />
        </main> */}
    </Box>
  )
}

// /todolistitem/:id



export default AppLayout
