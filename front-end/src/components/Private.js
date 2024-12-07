import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Private() {
    const auth=sessionStorage.getItem("authToken");
    return auth? <Outlet/>:<Navigate to="/login"/>
}
export default Private
