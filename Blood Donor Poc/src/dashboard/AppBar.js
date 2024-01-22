import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

 function ButtonAppBar() {
const [login,setLogin]=React.useState("")
const [Registrtation,setRegistration]=React.useState("")
// if (path==="'./login"){
//     setLogin(true)
// }
const currentPath=window.location.pathname;
console.log(currentPath)
//  if (currentPath==="/login"){
//     setLogin("hnmkk")
//  }

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className='appBar'>
        <Toolbar className='appBar'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography  sx={{ flexGrow: 1 }} className='hcl'>
            <div className='hcl'>
                  <Link  to='./' className='hcl-1'>HCLTech</Link>
                <h1 className='donate'>Donate Blood Save Life</h1>
            </div>
           
          </Typography>
          <Typography > </Typography>
          {currentPath==='/login'?null:null}
          {currentPath==='/Registration'?<Link to="./login" className=' login-link ml-5'>LOGIN</Link>:null}
          {(currentPath==='/')&&(<> <Link to="./login" className=' login-link ml-5'>LOGIN</Link>
 <Link to="./Registration" className='mr-10'>REGISTER</Link>
 </> )}
          
          
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default React.memo(ButtonAppBar)