import React from 'react'
import {useState,createContext} from 'react'

const AuthorizeContext=createContext({});
 export  const AuthContextProvider = ({children}) => {
     const [AuthState,setAuthState]=useState({});
  return (
    <AuthorizeContext.Provider value={{AuthState,setAuthState}}>
        {children}
    </AuthorizeContext.Provider>
  )
}

export default AuthorizeContext;