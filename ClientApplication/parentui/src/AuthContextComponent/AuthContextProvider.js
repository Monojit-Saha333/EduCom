import React from 'react'
import {useState,createContext} from 'react'

const AuthorizaContext=createContext({});
 export  const AuthContextProvider = ({children}) => {
     const [AuthState,setAuthState]=useState({});
  return (
    <AuthorizaContext.Provider>
        {children}
    </AuthorizaContext.Provider>
  )
}

export default AuthorizaContext;