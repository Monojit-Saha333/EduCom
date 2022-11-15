import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Card, Container,Alert } from "react-bootstrap";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login() {
  const { AuthState, setAuthState } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const [Alertboxmessage, setAlertboxmessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: "https://localhost:44342/api/Account/login",
        method: "POST",
        data: formValue,
      });
      const role = response?.data?.userRole,
        pwd = formValue.password,
        username = formValue.username,
        accessToken = response?.data?.jwtToken,
        expiresIn = response?.data?.expiresIn;
      console.log(expiresIn);
      await setAuthState({ username, role, pwd, accessToken, expiresIn });
      localStorage.setItem("role", role);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("username", username);
      console.log(AuthState);
      navigate("/", { state: { role, username } });
    } catch (err) {
      if(err.response.status===401){
        setAlertboxmessage("Wrong Username or Password");
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
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md={6}>
          <Card>
            <Card.Body>
            <Alertbox variant="warning" message={Alertboxmessage} setmessage={setAlertboxmessage}/>
              <h1>Login</h1>
              <hr></hr>
              <Form onSubmit={handleSubmit}>
                {/* user name */}
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column xxl="4">
                    Username <sup>*</sup>
                  </Form.Label>
                  <Col md={12}>
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
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column xxl="4">
                    Password <sup>*</sup>
                  </Form.Label>
                  <Col md={12}>
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
                    <p> Not Registered Yet ?</p>
                    <Link to="/register">Register</Link>
                  </Col>
                  <Col>
                    <Button
                      className="float-right"
                      size="md"
                      variant="primary"
                      type="submit"
                      id="submit"
                      style={{ float: "right" }}
                    >
                      Login
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
export default Login;
