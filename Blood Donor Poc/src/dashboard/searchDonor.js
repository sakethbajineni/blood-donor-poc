import React, { useEffect, useState } from "react";
import './donor.css'
import { Button } from "bootstrap";
import CustomizedAccordions from "./Accordian2";
import { list } from "postcss";
function SearchDonor( {searchParams,setSearchParams,onSearchClick}){
    const bloodGroups=["A+","A-","B+","B-","AB+","AB-","O+","O-"]
    const [bloodGroup,setBloodChange]=useState("")
    const [countries,setCountries]=useState(["india","pakistan","japan","china","america","dubai"])
    const [country,setCountry]=useState("")
    const [states,setStates]=useState(["Telangana","Andhra Pradesh","Bihar","gujarat","goa","pondicherry"])
    const [state,setStateChange]=useState("")
    const [districts,setDistricts]=useState(["Karimnagar","Hyderabad","jagtial","adilabad","Nizamabad","Siddipet","Siricilla"])
    const [districtsChange,setDistrictChange]=useState("")
    const [cities,setCities]=useState(['Korutla',"Metpalli","Hyderabad","Jagtial","Karimnagar"])
    const [Countryerror,setCountryError]=useState(false)
    const [BloodError,setBloodError]=useState(false)
    const [StateError,setStateError]=useState(false)

    const getcountries=async ()=>{
        // const url=""
        // const options={
        //     method:"GET",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        // }
        // const response=await fetch(url,options)
        // const data=response.json
        // setCountries(data)
    }
    useEffect(()=>{
       getcountries()
    },[])

    const handleBloodChange=(e)=>{
        setSearchParams({
            ...searchParams,
            [e.target.name]:e.target.value,
        })
        setBloodChange(e.target.value)


    }



const handleCountryChange=async(e)=>{

setSearchParams({
    ...searchParams,
    [e.target.name]:e.target.value,
})
console.log("name")




        setCountry(e.target.value)
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
        setSearchParams({
            ...searchParams,
            [e.target.name]:e.target.value,
        })

        setStateChange(e.target.value)
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
        // setDistrictChange(data)

    }
    const handleDistrictChange=async(e)=>{

        setSearchParams({
            ...searchParams,
            [e.target.name]:e.target.value,
        })
        setDistrictChange(e.target.value)
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
        // (data)

    }

    const handleCityChange=(e)=>{
        setSearchParams({
            ...searchParams,
            [e.target.name]:e.target.value,
        })

        console.log(e.target.name,"name")
        console.log(e.target.value,"value")
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
        // (data)


    }
    const handleSubmit=(e)=>{
        if (country==''){
            setCountryError(true)
        }
        else{
            setCountryError(false)
        }
        if(bloodGroup==""){
            setBloodError(true)
        }
        else{
            setBloodError(false)
        }
        if (state==""){
            setStateError(true)

            console.log(StateError,"if")
        }
        else{
            console.log(StateError,"else")
            setStateError(false)
        }
        if (country!="" && bloodGroup!="" &&state!=""){
            onSearchClick()
        }

        // console.log(e.target.name,"name")
        // console.log(e.target.value,"value")
        // if ([e.target.value]==''){
        //     setError(true)

        // }
        // else{
        //     onSearchClick()
        // }

       
    }



    return(
        <div >
            <div className="box">

         

           <div className="row-1">
            <label>Blood Group  <span className="star text-red-600	">*</span></label>
            <p className="colon-1">:</p>

            <select id="blood-group" className="blood" name="bloodGroup" onChange={handleBloodChange} style={{border:BloodError?"2px solid red":""}}>
                <option>---Select----</option>
                { bloodGroups.map((lists)=>(
                    <option value={lists} key={lists} name="country">{lists}</option>

                ))}
            </select>

           </div>
           <div className="row-2">
            <label>Select Country  <span className="star text-red-600	" >*</span></label>
            <p className="colon-2">:</p>
            
            <select id="country" className="country-one" name="country" onChange={handleCountryChange} value={searchParams.country} style={{border:Countryerror?"2px solid red":""}}>
            <option>---Select----</option>
                { countries.map((lists)=>(
                    <option value={lists} key={lists} >{lists}</option>

                ))}
            </select>

           </div>
           <div className="row-3">
           <label>Select State <span className="star text-red-600	">*</span></label>
           <p className="colon-3">:</p>
           <select id="state" className="state"  name="state"  onChange={handleStateChange}style={{border:StateError?"2px solid red":""}}>
            <option>---Select----</option>
                { states.map((lists)=>(
                    <option value={lists} key={lists}>{lists}</option>

                ))}
            </select>

           </div>
           <div className="row-4">
           <label>  Select District   </label>
           <p className="colon-4">:</p>

           <select id="state" className="district"  name="district" onChange={handleDistrictChange}>
            <option>---Select----</option>
                { districts.map((lists)=>(
                    <option value={lists} key={lists}>{lists}</option>
                ))}
            </select>

           </div>




           <div className="row-2">
            <label>Select City </label>
            <p className="colon-2">:</p>
            
            <select id="City" className="country-one" name="city" onChange={handleCityChange}>
            <option>---Select----</option>
                { cities.map((lists)=>(
                    <option value={lists} key={lists}>{lists}</option>

                ))}
            </select>

           </div>




</div>
<button type="button" className="button-1 rounded-full"  onClick={handleSubmit}> Search</button>

        </div>
    )
}
// const mapStateToProps=(state)=>{
//     return{
//         table:state.table

//     }
// }
// const mapDispatchToProps={
//     setTable
// }
export default  SearchDonor