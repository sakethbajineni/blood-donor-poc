import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SearchDonor from './searchDonor';
import "./donor.css"
import SearchIcon from '@mui/icons-material/Search';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ButtonAppBar from './AppBar';
import MuiTable from './table1';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1.2px solid #00bfff`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  borderRadius:15,
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : '#1e90ff',
      borderRadius:15,
      
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor:'white',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderRadius:15,

}));

export default function CustomizedAccordions({table}) {
  const [expanded, setExpanded] = React.useState('panel1');
  const [showTable,setShowTable]=React.useState(false)
  const [searchParams,setSearchParams]=React.useState({
    bloodGroup:"",
    country:'',
    state:'',
    district:"",
    city:""
 })
  
console.log(table,"fhgh")
console.log("searching",searchParams)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSearchClick=()=>{
setShowTable(!showTable)
  }
  const navigate=useNavigate()
  const handleLogin=()=>{
    navigate('./login')

  }
  const handleRegister =()=>{
    navigate('./Registration')
  }
  return (
    <div>
        <div>
        <ButtonAppBar/>
        
        <div className='Accodian-1   bg-color'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  className="heading">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="heading">
          <Typography className="ss" ><p className='title-2'>Search for Blood Donor</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
           <SearchDonor  onSearchClick={handleSearchClick} searchParams={searchParams} setSearchParams={setSearchParams}/>
          </Typography>
        </AccordionDetails>
      </Accordion>


      
    </div>
    <div>
      
    </div>
      
    </div>

   { showTable&&<MuiTable searchParams={searchParams}/>}

    </div>
    
  );
}



