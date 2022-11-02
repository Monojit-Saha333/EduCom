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

function Register() {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    Role: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValue);
    try {
      const response = await axios({
        url: "https://localhost:44342/api/Account/AddUser",
        method: "POST",
        data: formValue,
      });
      console.log(response);
    } catch (err) {
     if(err.response==null)
        console.log('server Error');
    else if(err.response.status==409)
      console.log(err.message)
    }
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
  const handleChangeRole = (e) => {
    setFormValue({ ...formValue, Role: e.target.value });
  };
  return (
    <div className="Register">
      <Container>
        <Card>
          <Card.Body>
            <h1>Register</h1>
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
              {/* role */}
              <Form.Group as={Col} controlId="formPlaintextRole">
                <Form.Label>
                  Role <sup>*</sup>
                </Form.Label>
                <Form.Select
                  name="role"
                  id="role"
                  required="on"
                  aria-label="Open this select menu"
                  value={formValue.Role}
                  onChange={handleChangeRole}
                >
                  <option>Open this select menu</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </Form.Select>
              </Form.Group>
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
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
export default Register;
