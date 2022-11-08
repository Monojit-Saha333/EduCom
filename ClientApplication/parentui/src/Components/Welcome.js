import React from 'react'

const Welcome = ({username}) => {
  return (
    <div className="Welcome-div">
    <h5>Welcome</h5>
    <h1>{username}</h1>
    <h3>Happy to See You Back </h3>
    </div>

  )
}

export default Welcome;