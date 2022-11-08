 import React from 'react';
 import useAuth from "./hooks/useAuth";
 import {useLocation ,Outlet,Navigate} from "react-router-dom"
 export const RequireAuth = ({allowedUser}) => {
     const {AuthState}=useAuth();
     const location =useLocation();
     return (
         allowedUser.includes(localStorage?.role?.toUpperCase()) & localStorage?.accessToken!=null?
         <Outlet/>:<Navigate to="/Login" state={{from:location}} replace/>
   )
 }
 