import React,{useEffect,useState} from "react";
import { Row, Col, Container, Card,Button } from "react-bootstrap";
import Profile from "../images/Profile.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const [UserData,setUserData]=useState(null);
    const navigate=useNavigate();
    const username=localStorage.username;

useEffect(() => {
 axios({
     "url":"https://localhost:44309/GetParentsByUsername/"+localStorage.username,
     "method":"GET",
     "headers":{Authorization:"Bearer "+localStorage.accessToken}
 }).then((response)=>{
     setUserData(response.data) 
     console.log(response.data)
    })

}, [username])

if(UserData==null)

return (
 <>
   <center>
    Register Parent Details <Button onClick={()=>navigate('/AddParentDetails')}>Start Registration</Button>
  </center>
 </>
)
else
return (
    <Container>
      <Card>
        <Card.Header>Profile Details</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <img
                src={Profile}
                alt="pic"
                width={100}
                height={100}
              ></img>
            </Col>
            <Col>
             
               
                  <h3>{UserData?.userName}</h3>
                  <h5>{UserData?.emailAddress}</h5>
                  <Row>
                  <Col><h5 >{UserData?.status}</h5></Col>
              
               </Row>
            
                <Button size="sm" onClick={()=>navigate('/User/Update',{state:UserData})}>Edit </Button>
               
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
      </Card>
    </Container>
  );
};


export default UserProfile;
