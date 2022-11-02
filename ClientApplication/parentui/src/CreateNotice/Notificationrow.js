
import React, { useEffect} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useNavigate} from "react-router-dom"
const Notificationrow=(props)=>
{
    const {notificationDate,subject,notificationPostedBy}=props.notice;
  
     const navigate=useNavigate();
    return(<div className="notificationrow" onClick={()=>{navigate("/Notificationdetails",{state:props.notice})}}><Row>
        <Col>{notificationDate}</Col>
        <Col>{subject}</Col>
        <Col>{notificationPostedBy}</Col>
    </Row>
    </div>);
}
export default Notificationrow;