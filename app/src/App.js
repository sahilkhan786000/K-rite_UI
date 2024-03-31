import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
function App() {
  return (
    <Box sx={{ display: 'flex' }}>

    <Box sx = {{ padding : '10px'}}><Sidebar/>
    </Box>
      
     <Box sx = {{ padding : '10px'}}>
     <Main/>
     </Box>
  

    </Box>
  );
}

export default App;
