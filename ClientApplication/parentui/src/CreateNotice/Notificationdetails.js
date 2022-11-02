import React from "react";
import {useLocation,useNavigate} from "react-router-dom";
import { Card, Container, Modal } from "react-bootstrap";

const Notificationdetails=()=>
{
     const location =useLocation();
     const noticedata=location.state;
     const navigate=useNavigate();
     if(noticedata==null)
        navigate("/error");
    return (
        <div>
        <Container>
            <Card>
                <Card.Body>
                    <h2>Notice</h2>
                    <h5>Date : {noticedata.date}</h5> 
                    <h5>Subject : {noticedata.subject} </h5>
                    <p>{noticedata.message}</p>
                </Card.Body>
            </Card>
            </Container>
        </div>
    )
};

export default Notificationdetails;