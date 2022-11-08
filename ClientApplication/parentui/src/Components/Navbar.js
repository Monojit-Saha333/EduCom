import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import {useState} from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "react-dom";
import NavbarLinks from "./NavbarLinks";


function NavBar({role}) {
  const redirect=role?.toUpperCase()==="USER"?'/create':'/Notice';
  const buttontext=role?.toUpperCase()==="USER"?'Register':'New Notice';
  const isrole=localStorage.role!=null?true:false;
  const [displayNavLink,setdisplayNavLink]=useState(isrole);//true when rolw is available
  
  const navigate=useNavigate();
  
  const SignOutHandler=async()=>
  {
    await  localStorage.clear();
    setdisplayNavLink(false);
    navigate("/Login");
     }

  return (
    <>
      <Navbar bg="light"  expand="lg" fixed='top' className="mb-5">
        <Container>
          <Link to="/" className="nav-link">
            <Navbar.Brand>Parent App</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <NavbarLinks/>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
