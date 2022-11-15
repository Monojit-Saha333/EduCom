import React,{useEffect,useState} from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Profile from "../images/Profile.png";
import axios from 'axios';
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const ParentProfile = () => {
    const [UserData,setUserData]=useState(null);
    const uselocation = useLocation();
    const state=uselocation.state;
    const id=state?.id;
    const status =UserData?.status;
    const navigate=useNavigate();

useEffect(() => {
 axios({
     "url":"https://localhost:44309/Parents/"+id,
     "method":"GET",
     "headers":{Authorization:"Bearer "+localStorage.accessToken}
 }).then((response)=>{
     setUserData(response.data) 
     console.log(response.data)
    })

}, [status])

const handleReject=async()=>
{
  try{
    const response= await axios({
      "url":"https://localhost:44309/Update-status?id="+UserData?.registationId+"&status=rejected",
      method:'PATCH',
      headers:{
        Authorization: "Bearer "+localStorage.accessToken
      }});

  window.location.reload()
    
  }
  catch(error)
  {
    alert(error);
  }
 

}
const handleApprove=async ()=>
{
  try{
  const response= await axios({
    "url":"https://localhost:44309/Update-status?id="+UserData?.registationId+"&status=Approved",
    method:'PATCH',
    headers:{
      Authorization: "Bearer "+localStorage.accessToken
    }
 
  })
  window.location.reload()
  }
  catch(error)
  {
    alert(error)
  }
  
}
const statuscolor=(status)=>
{
 
  if (status==='rejected')
  return 'red';
  if(status==='pending')
   return 'grey';
  if(status==='Approved')
  return 'green';
  
}
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
                  <Col><h5 style={{color:statuscolor(UserData?.status)}}>{UserData?.status}</h5></Col>
              
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
            <Approvebutton userdata={UserData?.status} handleApprove={handleApprove}/>
           <RejectButton userdata={UserData?.status} handler={handleReject}/>
         
        </Card.Footer>
      </Card>
    </Container>
  );
};

const Approvebutton=(props)=>
{
  const status=props.userdata;
  // console.log(props.userdata);
  if(status==="pending")
  return (
    <>
      <Button onClick={props.handleApprove} style={{ float: "right","margin" :"10px"}} size="sm" variant="success">Approve</Button>
    </>
  )
} 

const RejectButton=({userdata,handler})=>
{
  const status=userdata;
  console.log(status);
  if(status === "pending" || status==="Approved" )
  return (
    <>
      <Button  onClick={handler} style={{ float: "right","margin" :"10px"}} size="sm" variant="danger">Reject</Button>
    </>
  )
}

export default ParentProfile;
