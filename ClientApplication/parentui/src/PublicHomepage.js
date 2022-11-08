import React from 'react'
import {Col,Row} from 'react-bootstrap'
import Login from "./LoginComponent/Login"
import Homepagebground from "./Homepagebground.png"
import CImage from 'react-bootstrap/Image'
const PublicHomepage = () => {
  return (
      <>
      <Row>
        <Col>
         
        <CImage  style={{"display":"block","margin":"auto"}}src={Homepagebground} align="center" width="100%" height="100%"></CImage>
        </Col>
        <Col >
            <Login/>
        </Col>
        </Row>
      </>
    
  )
}

export default PublicHomepage;