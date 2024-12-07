import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Update() 
{
    const pa=useParams();
    const [state, setState] = useState({
        name: '', mobile: '', email: '', password: '', cnfpassword: '',address:''
    })
    useEffect(()=>{
        getDet();
        },[])
        const getDet=async()=>{
            await fetch('http://localhost:4000/getDetail/'+pa.id)
            .then(res=>res.json())
            .then(rec=>
                {
                    console.log(rec)
                    setState(rec)
                })
                .catch(()=>console.log("Api call Error"))
        }
    const [nameMessage, setNameMessage] = useState('')
    const [phoneMessage, setPhoneMessage] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [passMessage, setPassMessage] = useState('')
    const [cnfpassMessage, setcnfPassMessage] = useState('')
    const [addressMessage, setAddMessage] = useState('')

    
    const handler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const submitData = () => {
        const { name, mobile, email, password, cnfpassword, address } = state
        console.log(state)
        if(password===cnfpassword)
        {
            fetch(`http://localhost:4000/update/${pa.id}`,
            {
                method:"PUT",
                body:JSON.stringify({name,email,mobile,address,password,cnfpassword}),
                headers:{
                "Content-type":"application/json;charset=UTF-8",
                },
            })
            .then((response)=>response.json())
            .then((json)=>{
                setState(json)
                document.getElementById("result").innerHTML="Update Successfully"
                setState({name:'',email:'',address:'',mobile:'',password:'',cnfpassword:''})
            })
            .catch(()=>console.log("Api Call Error"))
        }
        else{
          document.getElementById("result").innerHTML="Password Does not match"
        }
        

        var nameExp = /^[a-zA-Z\s]+$/
        var numExp = /^[0-9]*$/
        var emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        var passExp = /^([a-zA-Z0-9@*#]{8,15})$/
        var alphaAddExp = /^[a-zA-Z0-9\s,.'-]{3,}$/
        
        /// Name validation ////
        if(name==="")
        {
            setNameMessage("Please enter Your name")
            return false
        }
        else if(!nameExp.test(name))
        {
            setNameMessage("Name should be Alphabet only")
            return false
        }
        else if(name.length<6 || name.length>15)
        {
            setNameMessage("Name should be 6 to 15 character")
            return false
        }
        else{
            setNameMessage("")
        }

        /// phone validation ///
        if(mobile==="")
        {
            setPhoneMessage("Please enter mobile number")
            return false
        }
        else if(!numExp.test(mobile))
        {
            setPhoneMessage("Number should be numeric only")
            return false
        }
        else if(mobile.length<10 || mobile.length>10)
        {
            setPhoneMessage("Number should be 10 digit only")
            return false
        }
        else{
            setPhoneMessage("")
        }
        /// email validation ////
        if (email ==="") {
            setEmailMessage("Please enter Your email")
            return false
        }
        else if (!emailRegExp.test(email)) {
            setEmailMessage("Please Enter valid email id")
            return false
        }
        else {
            setEmailMessage("")
        }

        //Password validation
        if (password === "") {
            setPassMessage("Please enter Password")
            return false
        }
        else if (!passExp.test(password)) {
            setPassMessage("Password should be Valid")
            return false
        }
        else {
            setPassMessage("")
        }
        /// confirm Password ///
        if(cnfpassword==="")
        {
            setcnfPassMessage("Please enter confirm password")
            return false
        }
        else if(!(password===cnfpassword))
        {
            setcnfPassMessage("Password does not match")
            return false
        }
        else{
            setcnfPassMessage("")
        }
        /// address validation ////
        if(address==="")
        {
            setAddMessage("Please enter message")
            return false
        }
        else if(!alphaAddExp.test(address))
        {
            setAddMessage("Enter valid message")
            return false
        }
        else {
            setAddMessage("")
        }
    }
    return (
        <>
            {/* <!-- signup start --> */}
            <div className="container-fluid" style={{ backgroundImage: 'url("https://hdwallsource.com/img/2014/9/blur-26347-27038-hd-wallpapers.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100% 100%' }}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 mx-auto">
                        <div className="border rounded-3 my-3 bg-white">
                            <h1 className="text-center my-4">Update Detail</h1>
                            <form action="">

                                <input type="text" className="form-control my-3 w-75 mx-auto" name="name" value={state.name} onChange={handler} placeholder="Your name"/>
                                <div style={{color:"red"}} className='mx-5'>{nameMessage}</div>

                                <input type="email" className="form-control my-3 w-75 mx-auto" placeholder="Email-id"  name="email" value={state.email} onChange={handler}/>
                                <div style={{color:"red"}} className='mx-5'>{emailMessage}</div>

                                <input type="number" className="form-control my-3 w-75 mx-auto" placeholder="Mobile No." name="mobile" value={state.mobile} onChange={handler}/>
                                <div style={{color:"red"}} className='mx-5'>{phoneMessage}</div>

                                <input type="password" className="form-control my-3 w-75 mx-auto" placeholder="Password"  name="password" value={state.password} onChange={handler}/>
                                <div style={{color:"red"}} className='mx-5'>{passMessage}</div>

                                <input type="password" className="form-control my-3 w-75 mx-auto" placeholder="Confirm Password"  name="cnfpassword" value={state.cnfpassword} onChange={handler}/>
                                <div style={{color:"red"}} className='mx-5'>{cnfpassMessage}</div>

                                <input type="text" className="form-control my-3 w-75 mx-auto" placeholder="Address"  name="address" value={state.address} onChange={handler}/>
                                <div style={{color:"red"}} className='mx-5' >{addressMessage}</div>

                                <div className="d-grid gap-2 mx-auto col-10 my-4">
                                    <button type="button" className="btn btn-secondary w-75 mx-auto" onClick={submitData}>Update</button>
                                </div>
                            </form>
                            <div id="result" className='text-success text-center h4 my-3'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- signup End --> */}

        </>
    );
}

export default Update;