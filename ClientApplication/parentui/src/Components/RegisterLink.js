import React from 'react';
import {Link } from 'react-router-dom';

const RegisterLink = () => {
    if (localStorage?.role==="User")
    return (
      <Link to="/create" className='nav-link' >Register</Link>
    )
}

export default RegisterLink