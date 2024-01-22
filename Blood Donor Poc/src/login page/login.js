import './login.css'
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import AlertDialogModal from './alert Dialog';
import ButtonAppBar from '../dashboard/AppBar';

const Index = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [usernameError,setUserNameError]=useState("")
  const [passwordError,setPasswordError]=useState("")
  const jwtToken = Cookies.get("jwtToken");
  const navigate = useNavigate();
  const checkbox = document.getElementById("checkmark");
  const token = "your-jwt-token";
  let username;

  const handleUserNameChange=(e)=>{
    setUserid(e.target.value)
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
    
  }
  const onSubmitSuccess = () => {
   
    if (checkbox.checked) {
      Cookies.set("jwtToken", token, { expires: 7 });
    } else {
      Cookies.remove("jwtToken");
    }
    Cookies.set("id", username, { expires: 7 });
    navigate("/home", { replace: true, state: { userid } });
  };

  const login = async (event) => {
    console.log("login clicked")
    event.preventDefault();




    if (password===''){
      setUserNameError("Please Enter Password")
    }
    else{
      setUserNameError("")
    }

    if (userid===''){
      setPasswordError("Please Enter UserName")
    }
    else{
      setPasswordError("")
    }






    const userDetails = { userid, password };

    const url = "";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);

    console.log(userDetails, "userdetails");

    const data = await response.json();
    if (response.status === 200) {
      username = data.id;
      onSubmitSuccess();
      
    } else {
      setError(data.message);
    }
    console.log(error, "error");
  };
  useEffect(() => {
    if (jwtToken) {
      navigate("/home");
    }
  }, [jwtToken, navigate]);


  const handleRegisterClick=()=>{
    navigate("/Registration",{ replace: true })
  }

  return (
    <>
    <ButtonAppBar/>
      <div className=" main flex items-center h-screen   ">
        
        <div className=" login-main flex flex-1 flex-col justify-start px-6 py-6  w-3/4">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <h2 className="mt-5 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Blood Donors
            </h2> */}
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={login}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  USERNAME
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleUserNameChange}
                    value={userid}
                    id="email"
                    name="email"
                    type="text"
                    style={{ border: passwordError ? '2px solid red' : '' }}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 value:scroll-ml-20"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    PASSWORD
                  </label>
                  <div className="text-sm">
                    <a href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={handlePasswordChange}
                    value={password}
                    id="password"
                    type="password"
                    name="password"
                    style={{ border: usernameError ? '2px solid red' : '' }}

                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 value:scroll-ml-20"
                  />
                </div>
              </div>
              {/* {error && (
  <p className="error"> *{error} </p>

              )} */}
              {/* {passwordError && <p className="text-red-600">*{passwordError}</p>}
              {usernameError && <p className="text-red-600">*{usernameError}</p>} */}
              {error && <p className="text-red-600">*{error}</p>}
              <div className="p-1 flex justify-item-center text-left">
                <input
                  className="w-5 mr-1 px-3 h-5 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                  id="checkmark"
                  type="checkbox"
                  ></input>
                <label htmlFor="checkmark">Keep me login</label>
              </div>

              <div>
                <button
                  type="submit"
                  className=" flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
                {/* <AlertDialogModal error={error}/> */}
                {/* {{error}?<p className="text-red-600">*{error}</p>:null} */}
               <p className='dont mt-5 pl-20 '>
                <Link to='./Registration'>Don't have an Account ?</Link></p>
              </div>
            </form>

          </div>
        </div>
        <div>
          <img src="blood4.jfif" className="login-image" alt="website login" />
        </div>
      </div>
    </>
  );
};
export default React.memo(Index)
