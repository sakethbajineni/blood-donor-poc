import React, { useCallback, useState } from "react";
import InputBox from "./input box";
import { useEffect } from "react";
import './app.css'
import { Navigate, json } from "react-router";
import { useNavigate } from "react-router";
import ButtonAppBar from "../dashboard/AppBar";
import { Paper } from "@mui/material";
import { SendTwoTone } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { FaEye,FaEyeSlash } from "react-icons/fa";
export default function RegistrationForm(){
    const [detais,setDetails]=useState({ 
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        bloodGroup:"",
        country:"",
        state:"",
        district:"",
        city:"",
        mobileNumber:"",
        gender:"",
        checkBox:false

    })
    const [error,setError]=useState({})
    const navigate=useNavigate()
    const handleChange=(e)=>{
        setDetails({...detais,[e.target.name]:e.target.value})
    }

  

    const bloodGroups=["----Select----","A+","A-","B+","B-","AB+","AB-","O+","O-"]
    const [countries,setCountries]=useState(["India","Pakistan","America","Canada","UK"])
    const [countryChange,setCountryChange]=useState("")
    const [countryError,setCountryError]=useState("")
    const [stateError,setStateError]=useState("")
    const [states,setStates]=useState(["Telangana","Andhra Pradesh","Tamilnadu","Karnataka","Kerala","New Delhi","Maharasthra","Gujarat"])
    const [Districts,setDistricts]=useState(["Karimnagar","Jagtial","Hyderabad","Nizamabad","Siricilla","Siddipet"])
    const [Cities,setCities]=useState(["Korutla","Metpally","Jagtial","Hyderabad","Karimnagar"])
    const [EmailError,setEmailError]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [PasswordError,setPasswordError]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [confirmPasswordError,setPassconfirmPasswordError]=useState("")
    const [name,setName]=useState("")
    const [nameError,setNameError]=useState(false)
    const [mobileNumber,setMobileNumber]=useState("")
    const[mobileError,setMobileError]=useState("")
    const [showPassword,setShowPassword]=useState(false)
    const [showConfirmPassword,setShowConfirmedPassword]=useState(false)
    



    const getcountries=async ()=>{
    //     const url=""
    //     const options={
    //         method:"GET",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //     }
    //     const response=await fetch(url,options)
    //     const data=response.json
    //     setCountries(data)
    }
    useEffect(()=>{
       getcountries()
    },[])

    const handleBloodChange=(e)=>{
        // const {name,value}=e.target;
        // setDetails({
        //     ...detais,   
        //     [name]:value,
        // })
      
        setDetails({...detais,bloodGroup:e.target.value})


    }

    const handleCountryChange=async(e)=>{
        setDetails({...detais,country:e.target.value})
        setCountryError(false)

       
      
       

        // setCountry(e.target.value)
        // const url=""
        // const options={
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify(country)
        // }
        // const response=await fetch(url,options)
        // const data=response.json
        // setStates(data)

    }
    const handleStateChange=async(e)=>{
        setDetails({...detais,state:e.target.value})
     

    }
    const handleDistrictChange=async(e)=>{
        setDetails({...detais,district:e.target.value})
     

    }
    const handleCityChange=(e)=>{
        setDetails({...detais,city:e.target.value})
    


    }
    const handlePasswordChange=(e)=>{
        setDetails({...detais,password:e.target.value})


        setPassword(e.target.value)
       
    }



    const handlenameChange=(e)=>{
        setDetails({...detais,name:e.target.value})
        setName(e.target.value)
        setNameError(false)

    }


    const handleEmailChange=(e)=>{

        setDetails({...detais,email:e.target.value})
        setEmail(e.target.value)
        
    }


console.log(detais.name,"name",detais.state,"state")



    const handleDisable=()=>{
        return detais.name===""||detais.email===""||detais.password===""|| detais.confirmPassword===""||detais.state===""||detais.country===""||detais.district===""||detais.city===""||detais.mobileNumber==="" ||detais.gender==="" ||detais.checkBox===false || EmailError!="" ||mobileError!="" ||PasswordError!=""||confirmPasswordError!=""||nameError!="";

    }
    console.log(handleDisable(),"disable")
    console.log(EmailError,"emailError")
    console.log(PasswordError,"password")
    console.log(confirmPasswordError,"confirmPassword")
    console.log(mobileError,"mobileError")

      
    const handleConfirmPasswordChange=(e)=>{
        setDetails({...detais,confirmPassword:e.target.value})

        setConfirmPassword(e.target.value)
       
    }


   const  handleMobileChange=(e)=>{
    setDetails({...detais,mobileNumber:e.target.value})
    setMobileNumber(e.target.value)
    

   }


   const handleGenderChange=(e)=>{
    setDetails({...detais,gender:e.target.value})


   }


   const handleCheckBox=(e)=>{
    setDetails({...detais,checkBox:e.target.checked})
   }


const ConfirmPasswordhandleBlur=()=>{
    if (password===confirmPassword){
        setPassconfirmPasswordError("")

    }

    else{
        setPassconfirmPasswordError("Passwords do not match")
    }       

}

const handleEmailBlur=()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address');
        
        }
        else{
            setEmailError("")
        }
    

}
const handlePasswordBlur=()=>{
    if (password.length < 8) {
        setPasswordError('Password must be at least 8 characters');
       
        }
        else{
            setPasswordError("")
        }        

}
const handleMobileBlur=()=>{
    const mobileRegex = /^\d{10}$/; 
if (!mobileRegex.test(mobileNumber)) {
setMobileError('Please enter a valid 10-digit mobile number');
}
else{
    setMobileError("")
}
    

}

const handleNameBlur=()=>{
    if (detais.name===""){
        setNameError(true)
    }
}

const handleCountryBlur=()=>{
    if (detais.country===""){
        setCountryError(true)
    }
    

}
const handleStateBlur=()=>{
    if (detais.state===""){
        setStateError(true)
    }

}




    const handleRegister=async(e)=>{
        e.preventDefault();

        console.log(detais)
        console.log(password,"sadksad")
      

 

console.log(confirmPasswordError,"pasdd")

console.log(confirmPassword,"confirm")
    console.log(password,"sadksad")
    console.log(password.length,"length")
    console.log("kjhsdhjs")
    
        // const newErrors={};
        // Object.keys(detais).forEach((field)=>{
        //     if (!detais[field]){
        //         newErrors[field]='Required'
        //     }
        // });
        // if (detais.password !==detais.confirmPassword){
        //     newErrors.confirmPassword='Passwords do not match'
        // }
        // setError(newErrors)
        // if (Object.keys(newErrors).length===0){
        //     console.log('form submitted',detais)
        // };
        // console.log(error)
        // const options={
        //     method:"POST",
        //     headers:{
        //         "content-type":"Application/json"
        //     },
        //     body:JSON.stringify(detais)

        // }
        // const url=""
        // const response=await fetch(url,options)
        // const data =await response.json
        // if (response.status===200){
        //     navigate('/')
        // }else {
        //     setError(data.message);
        //   }
        
    }
    const togglePasswordVisibility=()=>{
        setShowConfirmedPassword(!showConfirmPassword)


    }
    const togglePasswordVisibilityPass=()=>{
        setShowPassword(!showPassword)



    }

 console.log(detais)
    return (
        <form onSubmit={handleRegister}>
        <div className="container-box">
        <div className="container-main" style={{height:"1050px", backgroundColor:"#f7f7f7"}}>
        <ButtonAppBar/>
        <Paper className="paper-component" style={{backgroundColor:"",width:"1050px",height:"850px"}}>
        <div className="container">
            <div>
            <p className="title font-bold text-lime-800	"> REGISTER AS A DONOR</p>


            </div>
            <div className="row-one">
            <div className="input-box">
             
                <label className="label-fullname font-bold">Full Name</label>

                <Paper>
            <InputBox type={"text"} name="FullName" onBlur={handleNameBlur} onChange={handlenameChange} id={"hjk"} label={"First Name"} className={"firstName"} required={"required"} style={{border:nameError?"2px solid red":""}} />
       </Paper>
        </div>

        <div className="input-box2">
        <label className="label-email font-bold">Email</label>
        <Paper  >
        <InputBox type={"text"}  name="Email"   onBlur={handleEmailBlur}  onChange={handleEmailChange} id={1} label={"Last Name"} className={"lastname "} style={{border:EmailError?"2px solid red":""}}/>
        </Paper>
        <p className="text-red-600	">{EmailError}</p>
        </div>

            </div>

            <div  className="row-two">
<div className="inpu">
        <label className="label-password font-bold	">Password</label>

       <Paper> 
        <InputBox type={showPassword?"text":"password"}  name="Password"   onBlur={handlePasswordBlur}  onChange={handlePasswordChange} id={2} label={"Email"} className={"password"} required={"required"} style={{border:PasswordError?"2px solid red":""}}/>
        </Paper>
        <button type="button" onClick={togglePasswordVisibilityPass} className="eyeicon">
                {showPassword ? <FaEye />:<FaEyeSlash /> }
            </button>
        <p className="text-red-600">{PasswordError}</p>
        </div>
        <div className="input-box2">
        <label className="label-confirm font-bold ">Confirm-Password</label>
        <Paper>
        <InputBox type={ showConfirmPassword? "text" :"password"}  name=" confirmPassword"   onBlur={ConfirmPasswordhandleBlur}  onChange={handleConfirmPasswordChange}  id={3} label={"Password"} className={"confirm-password"} required={"required"}  style={{border:confirmPasswordError?"2px solid red":""}}/>
        
        </Paper>
        <button type="button" onClick={togglePasswordVisibility} className="eyeicon">
                { showConfirmPassword? <FaEye />: <FaEyeSlash />}
            </button>
        <p className=" text-red-600">{confirmPasswordError}</p>
        </div>
</div>

           












<div className="row-four mt-6">
<div className="input">
            <label className="label-blood font-bold	" >Blood Group </label>
            <Paper className="">
           
        
       <select id="blood-group" className="blood-1" onChange={handleBloodChange} name="BloodGroup" style={{border:error.BloodGroup?"2px soid red ":""}} >
                { bloodGroups.map((lists)=>(
                    <option value={lists} key={lists}>{lists}</option>

                ))}
            </select>
            </Paper>
           

           </div>
           <div  className="input">
            <label className=" label-country font-bold	">Select Country  </label>

            <Paper>

            <select name="countries" id="countries" onBlur={handleCountryBlur} onChange={handleCountryChange} className="select-country" style={{border:countryError?"2px solid red":""}}>
                <option>----Select----</option>
                {countries.map((lists)=>(
                    
                    <option value={lists} key={lists}>{lists}</option>
                ))}

            </select>
            </Paper>

           </div>
    

</div>












<div className="row-five mt-6 ">
<div className="input">
           <label className="label-state font-bold	">Select State </label>

           <Paper>

            <select name="states" id="states"  onBlur={handleStateBlur} onChange={handleStateChange} className="select-state" style={{border:stateError?"2px solid red":""}}>
            <option>----Select----</option>

                {states.map((n)=>(
                    <option value={n} key={n}>{n}</option>
                ))} 

            </select>
            </Paper>
           </div>
           <div  className=" input ">
           <label className="label-district font-bold	">Select District  </label>
           <Paper>
            <select name="district" id="district" onChange={handleDistrictChange} className="select-district">
            <option>----Select----</option>
                {Districts.map((n)=>(
                    <option value={n} key={n}>{n}</option>
                ))}

            </select>
            </Paper>

           </div>


</div>


<div className="row-three">
<div  className=" input ">
           <label className="label-district font-bold	">Select City  </label>
           <Paper>
            <select name="City" id="district" onChange={handleCityChange} className="select-city" >
            <option>----Select----</option>
                {Cities.map((n)=>(
                    <option value={n} key={n}>{n}</option>
                ))}

            </select>
            </Paper>

           </div>

           <div className="input-box-1">
             
             <label className="label-fullname font-bold">Mobile Number</label>

             <Paper>
         <InputBox type={"number"}  name="Mobile Number"   onBlur={handleMobileBlur}   onChange={handleMobileChange} id={0}  className={"no-spinners"} required={"required"} style={{border:mobileError?"2px solid red":""}} />
    </Paper>
    <p className="text-red-600">{mobileError}</p>
     </div>       

</div> 



<div className="row-eight">
<div className="radio-butt">
                <p className=" label-gender  font-bold	 ">Gender</p>

                <div className="radio"> <InputBox type={"radio"}  onChange={handleGenderChange} id={"male"} value={"male"} name={"gender"}/>
        <label htmlFor="male" className="male font-bold"><h6>Male</h6></label></div>
        <div className="radio-1"> <InputBox type={"radio"}  onChange={handleChange} id={"female"} value={"female"} name={"gender"}/>
        <label htmlFor="female" className="female font-bold"><h6>Female</h6></label></div>
        <div className="radio-2"> <InputBox type={"radio"}  onChange={handleChange} id={"prefer"} value={"Prefer Not to say"} name={"gender"}/>
        <label htmlFor="prefer" className="male font-bold"><h6>Prefer not to say</h6></label></div>
   
       

                </div>

</div>









            
            <div className="row-seven">
                <input type="checkbox"  onChange={handleCheckBox}/>
                <label className="ml-2">I authorise this website to display my name and telephone number, so that the needy could contact me, as and when there is an emergency.
</label>

                
 
<button   type="submit"  disabled={handleDisable()} style={{backgroundColor:handleDisable()?"#e3e3e3":""}} className="submit rounded-full mt-5 flex w-40  justify-center  bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
            {/* {error &&<p>{error}</p>}  */}

            </div>
            
           

        </div>
        </Paper>

        </div>
        </div>
        </form>
    )
}