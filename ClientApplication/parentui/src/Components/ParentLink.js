import React from 'react'
import {Link} from 'react-router-dom'
const ParentLink = () => {
    if (localStorage?.role==="Administrator")
  return (
    <Link to="/Parents" className='nav-link' >Parent</Link>
  )
}

export default ParentLink