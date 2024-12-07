import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate=useNavigate();
  const auth=sessionStorage.getItem("authToken");
  const usermail=sessionStorage.getItem("email");
  // const username=sessionStorage.getItem("name");
  const logout=()=>{
    sessionStorage.clear();
    navigate("/login")
  }
    return (
       <>
         {/* <!-- navbar start --> */}
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        {/* <!-- <i className="fa-solid fa-dumbbell icon"></i>-->  */}
       <Link className="navbar-brand ms-4 text-white" to="/"> Fitness Freak</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          {
            auth?
            <ul className="navbar-nav me-5 mb-2 mb-lg-0">
              <li className="nav-item">
             <Link className="nav-link text-white mx-3" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link text-white mx-3" to="/about">About us</Link>
            </li>
            <li className="nav-item dropdown">
             <Link className="nav-link dropdown-toggle text-white mx-3" to="diet" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dietplan
             </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/gain">Weight-Gain</Link></li>
                <li><Link className="dropdown-item" to="/loss">Weight-lose</Link></li>
              </ul>
            </li>
            <li className="nav-item">
             <Link className="nav-link text-white mx-3" to="/bmi">BMI</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link text-white mx-3" to="/picture">Pictures</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link text-white mx-3" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white mx-3" to="/fetch">Fetch</Link>
           </li>
           <li className="nav-item">
           <div className='fs-6 text-white text-center'>{usermail}</div>
         <button className='btn btn-success fs-6 pt-0 pb-0' onClick={logout}>  Logout</button>
        </li>
      </ul>
          : 
          <ul className="navbar-nav me-5 mb-2 mb-lg-0">
            <li className="nav-item">
             <Link className="nav-link text-white mx-3" to="/login">Login</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link text-white mx-3" to="/signup">Signup</Link>
            </li>
          </ul>
            }
        </div>
      </div>

       {/* <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
    </nav>

    {/* <!-- navbar end --> */}
       
       </>
    );
}

export default Navbar;