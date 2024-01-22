import logo from './logo.svg';
import './App.css';
import Index  from './login page/login';
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import RegistrationForm from './registration page/app';
import SearchDonor from './dashboard/searchDonor';
import CustomizedAccordions from './dashboard/Accordian2';
import PasswordInput from './registration page/eyeIcon';
function App() {
  return (
    <Routes>
      
      <Route path="/" exact Component={CustomizedAccordions} />
      <Route path="/Registration" Component={RegistrationForm}/>
      <Route path='/login' exact Component={Index}/>
      <Route path='/login/Registration' Component={RegistrationForm}/>
      <Route path='/Registration/login' exact Component={Index}/>
      
  
    </Routes>
  );
}

export default App;
