import React  ,{useContext} from 'react';
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from 'react-bootstrap';
import AuthorizeContext from '../AuthContextComponent/AuthContextProvider';
import {Link,useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import ParentLink from './ParentLink';
import RegisterLink from './RegisterLink';
import NoticeLink from './NoticeLink';




const NavbarLinks = () => {
    const {AuthState,setAuthState}=useAuth();
    const navigate=useNavigate();
    // alert(AuthState.role);
    const handleSignOut=async ()=>
{
  await localStorage.clear(); 
  navigate('/Login');
  
  setAuthState(null);
}
    if (localStorage?.role!=null)
  return (
    <>
        <Nav className="me-auto" >
            <Link className="nav-link" to="/Profile">
              Profile
            </Link>
            <Link className="nav-link" to="/DisplayNotices">
              Notices
            </Link>
            <ParentLink/>
          </Nav>
         <Nav className='ml-auto'>
         <NoticeLink/>
        <RegisterLink/>
            <Link class='nav-link' onClick={handleSignOut} > Sign Out</Link>
         </Nav>
         </>
  )
  else
  return(<>
  <Nav className='ml-auto'>
  <Link className="nav-link" to="/Login">Login</Link>
  <Link className="nav-link" to="/SignUp">Sign Up</Link>
  </Nav>
  </>)
}

export default NavbarLinks;

