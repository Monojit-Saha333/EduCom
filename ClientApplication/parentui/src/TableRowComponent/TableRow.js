import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
import CImage from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bin from '../images/bin.png';
import pencil from '../images/pencil.png';

import { Link } from "react-router-dom";


const TableRow = (props) => {
  const { record } = props;
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [modalmessage,setmodalmessage]=useState();
  const [cardDisplayState,setCardDisplayState]=useState("");
  const [displayOkButton,setDisplaOkButton]=useState("none");
  const displaymodal = () => {
    // setdeletedata(record);

    setCardDisplayState("");
    setDisplaOkButton("none");
    setmodalmessage("");
    setshowDeleteModal(true);
    
  };
  const hidemodal = () => {
    setshowDeleteModal(false)
 };
 const setmessage=(student)=>
 {
   setCardDisplayState("none");
   setDisplaOkButton("");
   setmodalmessage("Are you sure you want to delete the data of "+student);
 }
  const handleDelete = () => {
 
   
    const url = "https://localhost:44309/DeleteParents?id=".concat(
      record.registationId
    );
    axios({
      url: url,
      method: "DELETE",
      headers: {},
    }).then((response) => {
      console.log(response);
    });
    hidemodal();
    window.location.reload();
  };
  const rowvalues="rowvalues"
  return (
    <div id="Data-Row">
  <Row onClick={displaymodal}>
      <Col><div className={rowvalues}>{record.studentName}</div></Col>
        <Col><div className={rowvalues}>{record.parentName}</div></Col>
        <Col><div className={rowvalues}>{record.emailAddress} </div></Col>
        
        </Row>
       
    
      <Modal show={showDeleteModal}>
          <ModalHeader>Select Edit or Delete </ModalHeader>
          <ModalBody>
          <Row style={{"display":cardDisplayState}}>
          <Col>
          <Link
            variant="success"
            to={"details"}
            state={JSON.stringify(record)}
            key={record.key}
          >
            
          <CImage  style={{"display":"block","margin":"auto"}}src={pencil} align="center" width="140" height="140"></CImage>
           
          </Link>
          </Col>
          <Col>
      
          <CImage  style={{"display":"block","margin":"auto"} } onClick={()=>setmessage(record.studentName)} width="140" height="140" src={bin}></CImage>
       
          </Col>
          </Row>
          {modalmessage}
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>{hidemodal()}}>Cancel</Button>
            <Button onClick={handleDelete} style={{"display":displayOkButton}}>Proceed</Button>
          </ModalFooter>
        </Modal>
      
    </div>

   );
};

export default TableRow;
