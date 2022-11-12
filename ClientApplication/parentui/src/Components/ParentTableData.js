import React from "react";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";



const TableRow = (props) => {
  const { record } = props;
  const navigate=useNavigate();
  const id=record.registationId;
  return (
        <Row onClick={()=>navigate("/ParentProfile",{state:{id}})}>
            <Col xs={4}>{record.studentName}</Col>
            <Col xs={4}>{record.parentName}</Col>
            <Col xs={4}>{record.emailAddress}</Col>
        </Row>

   );
};

export default TableRow;
