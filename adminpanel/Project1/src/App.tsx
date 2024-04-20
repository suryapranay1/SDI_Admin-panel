import './App.css';
import ResponsiveAppBar from './components/Navbar';
import PersistentDrawerLeft from './components/Persistent-drawer';
import Header from './header';
import LabTabs from './components/tabs';
import { BrowserRouter } from 'react-router-dom';
import { Stack } from '@mui/material';
function App() {
  return (
    <>
    <Stack>
    <div style={{fontFamily:'sans-serif'}}>
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
      </div>
      </Stack>
      <Stack>
      <div>
    <div >{/*body*/}
    <div style={{display:'inline-block'}}>
    <PersistentDrawerLeft/>
    </div>

      <div style={{marginLeft:'20em',width:'50em'}}>
      <h1 style={{color:'#2e7d32'}}>Organization</h1>
      <br/>
    <LabTabs/>

    </div>
    </div>
    </div>  
    </Stack>
    </> 
  );
}

export default App;
