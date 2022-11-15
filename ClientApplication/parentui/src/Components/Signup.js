import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Card, Container, Alert } from "react-bootstrap";
import axios from "axios";
import ModalViews from "./ModalViews";

function Signup() {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    Role: "",
  });
  const [Alertboxmessage, setAlertboxmessage] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: "https://localhost:44342/api/Account/AddUser",
        method: "POST",
        data: formValue,
      });
      if (response.status === 200) setShow(true);
      //  navigate("/login");
    } catch (err) {
      if (err.response == null) {
        setAlertboxmessage(err.response.data.message);
      } else if (err.response.status === 409) {
        setAlertboxmessage(err.response.data.message);
        console.log(err.response);
      } else if (err.response.status === 400) {
        setAlertboxmessage("Role is Required");
      }
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
      <ModalViews
        show={show}
        setShow={setShow}
        Message={"User Account created"}
        buttontext={"Ok"}
        buttonclickevent={() => navigate("/Login")}
      />
      <Container>
        <Row>
          <Col></Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Alertbox
                  variant={"warning"}
                  message={Alertboxmessage}
                  setmessage={setAlertboxmessage}
                />
                <h1>Sign up</h1>
                <Form onSubmit={handleSubmit}>
                  {/* user name */}
                  <Form.Group as={Row} className="mb-3">
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
                        autoComplete="off"
                      />
                    </Col>
                  </Form.Group>

                  {/* password */}
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column md="4">
                      Password <sup>*</sup>
                    </Form.Label>
                    <Col md="8">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={formValue.password}
                        required="on"
                        onChange={handleChangePassword}
                        autoComplete="off"
                      />
                    </Col>
                  </Form.Group>
                  {/* role */}
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column md={4}>
                      Role <sup>*</sup>
                    </Form.Label>
                    <Col md="8">
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
                    </Col>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button
                        className="float-right"
                        size="md"
                        variant="primary"
                        type="submit"
                        id="submit"
                        style={{ float: "right" }}
                      >
                        Sign Up
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
const Alertbox = ({ variant, message, setmessage }) => {
  if (message != null)
    return (
      <Alert variant={variant} onClose={() => setmessage(null)} dismissible>
        {message}
      </Alert>
    );
};

export default Signup;
