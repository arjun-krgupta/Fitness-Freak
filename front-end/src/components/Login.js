import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate=useNavigate()
  const [state, setState] = useState({
    email: "", password: ""
  })
    // const [emailMessage, setEmailMessage] = useState('')
    // const [passMessage, setPassMessage] = useState('')
  
  const handler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const submitData = async() => {
    const { email, password } = state
    if (email && password) 
    {
      let userExist=await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {'Content-type': 'application/json; charset=UTF-8',},
      });
      let result=await userExist.json();
        if(result.token){
        //  sessionStorage.setItem("email",result.user.name);
         sessionStorage.setItem("email",result.user.name);
         sessionStorage.setItem("authToken",result.token)
          navigate("/fetch");
        }
        else{
          document.getElementById('result').innerHTML = "your email or password is incorrect!!!"
        }  
    }
    else {
      document.getElementById('result').innerHTML = "All field is required!!!"
    }
      //   var emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      //   var passExp = /^([a-zA-Z0-9@*#]{8,15})$/

      //    /// email validation ////
      //    if (email ==="") {
      //     setEmailMessage("Please enter Your email")
      //     return false
      // }
      // else if (!emailRegExp.test(email)) {
      //     setEmailMessage("Please Enter valid email id")
      //     return false
      // }
      // else {
      //     setEmailMessage("")
      // }
      // //Password validation
      // if (password === "") {
      //     setPassMessage("Please enter Password")
      //     return false
      // }
      // else if (!passExp.test(password)) {
      //     setPassMessage("Password should be Valid")
      //     return false
      // }
      // else {
      //     setPassMessage("")
      // }
  }
    return (
        <>
            {/* <!-- Login start --> */}
<div className="container-fluid" style={{backgroundImage:'url("https://hdwallsource.com/img/2014/9/blur-26347-27038-hd-wallpapers.jpg")', backgroundRepeat:'no-repeat', backgroundPosition:'center',backgroundSize:'100% 100%'}}>
  <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-5 mx-auto">
      <div className="border rounded-1 w-75 my-5 bg-white">
        <h1 className="my-5 text-center">Login</h1>
        <form>

          <input type="email" className="form-control my-4 w-75 mx-auto" placeholder="Email id" name='email' value={state.email}
          onChange={handler} />
           {/* <div style={{color:"red"}} className='mx-5'>{emailMessage}</div> */}

          <input type="password" className="form-control my-4 w-75 mx-auto" placeholder="Password" name='password' value={state.password} onChange={handler} />
          {/* <div style={{color:"red"}} className='mx-5'>{passMessage}</div> */}

          <div className="d-grid gap-2 mx-auto col-7 my-5">
            <button className="btn btn-secondary" type='button' onClick={submitData}>Login</button>
          </div>  
        </form>
        <div className='text-center text-success h4' id="result"></div>
      </div>
    </div>
  </div>
</div>
    {/* <!-- Login End --> */}
        
        </>
    );
}

export default Login;