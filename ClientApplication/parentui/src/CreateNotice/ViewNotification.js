import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Card, CarouselItem, Container, Modal } from "react-bootstrap";
import axios from "axios";
import Notificationrow from "./Notificationrow";
import "./viewnotification.css"

const Noticeview = () => {
  const [List_of_notice, setList_of_notice] = useState([]);
  
  const getNotifications = () => {
    axios
      .get("https://localhost:44318/Notifications")
      .then((res) => setList_of_notice(res.data.reverse()));
    };
  useEffect(() => {
    getNotifications();
  },[]);
  return (
    <div id= "notification_table">
      <Container>
        <Card>
        <Card.Header>
            <h1>Circulars</h1>
        </Card.Header>
          <Card.Body>
          <div className="notification_table_header">
            <Row>
              <Col>Date </Col>
              <Col>Subject</Col>
              <Col>Posted By</Col>
            </Row>
        </div>
            <Row>
              {List_of_notice.map( (notice)=>
              <Notificationrow notice={notice} key={notice.noticeId}/>
              )}
             
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Noticeview;
