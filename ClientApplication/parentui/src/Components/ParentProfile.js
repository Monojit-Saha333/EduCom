import React,{useEffect,useState} from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Profile from "../images/Profile.png";
import axios from 'axios';
import { useLocation } from "react-router-dom";

const ParentProfile = () => {
    const [UserData,setUserData]=useState(null);
    const uselocation = useLocation();
    const state=uselocation.state;
    const id=state.id;
    const status="Pending";
    const style=status=="Approved"?"green":"grey";

useEffect(() => {
 axios({
     "url":"https://localhost:44309/Parents/"+id,
     "method":"GET",
     "headers":{Authorization:"Bearer "+localStorage.accessToken}
 }).then((response)=>{
     setUserData(response.data) 
     console.log(response.data)
    })

}, [])


  return (
    <Container>
      <Card>
        <Card.Header>Profile Details</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <img
                src={Profile}
                alt="profile photo"
                width={100}
                height={100}
              ></img>
            </Col>
            <Col>
             
               
                  <h3>{UserData?.userName}</h3>
                  <h5>{UserData?.emailAddress}</h5>
                  <Row>
                  <Col>  <h5 style={{"color":style}}>{status}</h5></Col>
              
               </Row>
            </Col>
          </Row>
          <Row>
          <hr></hr>
          <Container>
              <Row>
              
              <Col> Parent Name </Col>
              <Col>{UserData?.parentName}</Col>
              </Row>
              <Row>
              <Col>Registration ID</Col>
              <Col>{UserData?.studentRegistrationId}</Col>
              </Row>
              <Row>
              <Col> Student Name </Col>
              <Col>{UserData?.studentName}</Col>
              </Row>
              <Row>
              <Col> Age </Col>
              <Col>{UserData?.age}</Col>
              </Row>
              <Row>
              <Col>Country</Col>
              <Col>{UserData?.country}</Col>
              </Row>
              <Row>
              <Col>State</Col>
              <Col>{UserData?.state}</Col>
              </Row>
              <Row>
              <Col>City</Col>
              <Col>{UserData?.city}</Col>
              </Row>
              
              <Row>
              <Col>Address</Col>
              <Col>{UserData?.address}</Col>
              </Row>
              <Row>
              <Col>ZipCode</Col>
              <Col>{UserData?.zipcode}</Col>
              </Row>
              <Row>
              <Col>City</Col>
              <Col>{UserData?.city}</Col>
              </Row>
              <Row>
              <Col>Primary Contact</Col>
              <Col>{UserData?.primaryContactPerson}</Col>
              </Row>
              <Row>
              <Col>Primary Phone</Col>
              <Col>{UserData?.primaryContactPersonPhoneNumber}</Col>
              </Row>
              <Row>
              <Col>Secondary Contact</Col>
              <Col>{UserData?.secondaryContactPerson}</Col>
              </Row>
              <Row>
              <Col>Secondary Phone</Col>
              <Col>{UserData?.secondaryContactPersonPhoneNumber}</Col>
              </Row>

              </Container>    
          </Row>
        </Card.Body>
        <Card.Footer>
            
            <Button style={{ float: "right" ,"margin":"10px"}} size="sm" variant="success">Approve</Button>
            <Button style={{ float: "right","margin" :"10px"}} size="sm" variant="danger">Reject</Button>
         
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ParentProfile;
