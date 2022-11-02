import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { countries } from "../FormComponent/country";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Card, CarouselItem, Container, Modal } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValue);
    axios({
      url: "https://localhost:44342/api/Account/login",
      method: "POST",
      data: formValue,
    }).then((res) => console.log(res.data));
  };
  const handleChangeUsername = (e) => {
    if (e.target.value.match("^[a-zA-Z0-9 ]*$") != null) {
      setFormValue({ ...formValue, username: e.target.value });
    }
  };
  const handleChangePassword = (e) => {
    if (e.target.value.match("^[a-zA-Z0-9]*$") != null) {
      setFormValue({ ...formValue, password: e.target.value });
    }
  };
  return (
    <Col md={{ span: 4, offset: 4 }}>
      <Container>
        <Card>
          <Card.Body>
            <h1>Login Form</h1>
            <hr></hr>
            <Form onSubmit={handleSubmit}>
              {/* user name */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column md="4">
                  Username <sup>*</sup>
                </Form.Label>
                <Col md="8">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={formValue.username}
                    required="on"
                    onChange={handleChangeUsername}
                  />
                </Col>
              </Form.Group>

              {/* password */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column md="4">
                  Password <sup>*</sup>
                </Form.Label>
                <Col md="8">
                  <Form.Control
                    type="text"
                    placeholder="Password"
                    value={formValue.password}
                    required="on"
                    onChange={handleChangePassword}
                  />
                </Col>
              </Form.Group>
              <Row>
              <Col>
                <Link to="/register">Register</Link>
              </Col>
                <Col>
                  
                  <Button
                    className="float-right"
                    size="lg"
                    variant="primary"
                    type="submit"
                    id="submit"
                    style={{ float: "right" }}
                  >
                    Submit
                  </Button>
                </Col>
        
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Col>
  );
}
export default Login;
