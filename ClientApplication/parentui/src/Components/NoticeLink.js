import React from 'react';
import {Link } from 'react-router-dom'

const NoticeLink = () => {
    if (localStorage?.role==="Admin")
    return (
      <Link to="/notice" className='nav-link' >Add Notice</Link>
    )
}

export default NoticeLink