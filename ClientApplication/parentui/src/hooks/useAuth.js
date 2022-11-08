import {useContext} from 'react';
import AuthorizeContext from "../AuthContextComponent/AuthContextProvider";

const useAuth = () => {
    
  return (
  useContext(AuthorizeContext))
}

export default useAuth;