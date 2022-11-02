import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import { Card, Container, Modal } from "react-bootstrap";
import axios from "axios";
import {useLocation} from "react-router-dom";

const NoticeComponent = () => {
    const location=useLocation();
    const noticedata=location.state;
    console.log(noticedata);
  const [formValue, setformValue] = useState({
    subject: "",
    message: "",
    notificationPostedBy: "ABC",
    "notificationDate":new Date().toJSON()
  });

  var [date, setdate] = useState(new Date().toISOString().slice(0, 10));
const handleSubmit=(e)=>
{
    e.preventDefault();
  
    axios({
        url:"https://localhost:44318/createNotice",
        method:"POST",
        headers:{},
        data:formValue
    }).then(console.log(Response))
}
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <h1> Create Notice</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Col} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  Subject <sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="Subject"
                  placeholder="Write Subject"
                  required="on"
                  onChange={(e) =>
                    setformValue({ ...formValue, subject: e.target.value })
                  }
                  value={formValue.subject}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  Body<sup>*</sup>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  onChange={(e) =>
                    setformValue({ ...formValue, message: e.target.value })
                  }
                  value={formValue.message}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formPlaintextPassword">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  disabled
                  placeholder="Notification Date"
                  onChange={e=>setdate(e.target.value)}
                  value={date}
                />
              </Form.Group>
              <br></br>
              <Button type="submit">Post</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default NoticeComponent;
