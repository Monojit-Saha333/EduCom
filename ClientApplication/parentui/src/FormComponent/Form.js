import React, { useState } from "react";
import { countries } from "./country";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import RegistrationmodalComponent from "../RegistrationModalComponent/RegistrationModal";

function PostUserData(userData, navigate) {
  return axios
    .post("https://localhost:44309/Parents", userData)
    .then((response) => {
      alert(
        `your account has been created with Id ${response.data.registrationId}`
      );

      navigate("/");
    });
}

function ParentForm() {
  const [formValue, setFormValue] = useState({
    studentName: "",
    parentName: "",
    studentRegistrationId: "",
    address: "",
    state: "West Bengal",
    country: "IN",
    city: "",
    zipcode: "",
    emailAddress: "",
    primaryContactPerson: "",
    primaryContactPersonPhoneNumber: "",
    secondaryContactPerson: "",
    secondaryContactPersonPhoneNumber: "",
    age: 0,
  });
  //const[registrationvalue,setregistrationvalue]=useState();
  const [userData, setuserData] = useState(null);
  const navigate = useNavigate();
  const states = countries.find(
    (country) => country.countrycode === formValue.country
  ).states;
  console.log(states);
  const handleSubmit = (e) => {
    e.preventDefault();
    PostUserData(formValue, navigate);
    console.log(formValue);
  };

  const handlecountrychange = (e) => {
    setFormValue({ ...formValue, country: e.target.value });
  };
  const handleChangeStudentName = (e) => {
    if (e.target.value.match("^[a-zA-Z ]*$") != null) {
      setFormValue({ ...formValue, studentName: e.target.value });
    }
  };
  const handleChangePrimaryName = (e) => {
    if (e.target.value.match("^[a-zA-Z ]*$") != null) {
      setFormValue({ ...formValue, primaryContactPerson: e.target.value });
    }
  };
  const handleStudentRegistrationId = (e) => {
    if (e.target.value === "")
      setFormValue({ ...formValue, studentRegistrationId: e.target.value });
    if (e.target.value.match(/^R/)) {
      setFormValue({ ...formValue, studentRegistrationId: e.target.value });
    }
  };

  const handleChangeSecondaryName = (e) => {
    if (e.target.value.match("^[a-zA-Z ]*$") != null) {
      setFormValue({ ...formValue, secondaryContactPerson: e.target.value });
    }
  };

  const handleChangeParentName = (e) => {
    if (e.target.value.match("^[a-zA-Z ]*$") != null) {
      setFormValue({ ...formValue, parentName: e.target.value });
    }
  };

  const handleChangeZipcode = (e) => {
    const elm = e.target;
    const zipcodeMaxLength = 6;
    const zipcodeRegex = "^[0-9]*$";

    if (!elm.value.match(zipcodeRegex)) return;

    if (elm.value.length > zipcodeMaxLength) return;
    setFormValue({ ...formValue, zipcode: elm.value });
  };
  const handleChangeCity = (e) => {
    if (e.target.value.match("^[a-zA-Z]*$") != null) {
      setFormValue({ ...formValue, city: e.target.value });
    }
  };
  const handleChangePrimaryPhoneNumber = (e) => {
    const elm = e.target;
    const phoneNumberMaxLength = 10;
    const phoneNumberRegex = "^[0-9]*$";

    if (!elm.value.match(phoneNumberRegex)) return;

    if (elm.value.length > phoneNumberMaxLength) return;
    setFormValue({ ...formValue, primaryContactPersonPhoneNumber: elm.value });
  };
  const handleChangeSecondaryPhoneNumber = (e) => {
    const elm = e.target;
    const phoneNumberMaxLength = 10;
    const phoneNumberRegex = "^[0-9]*$";

    if (!elm.value.match(phoneNumberRegex)) return;

    if (elm.value.length > phoneNumberMaxLength) return;
    setFormValue({
      ...formValue,
      secondaryContactPersonPhoneNumber: elm.value,
    });
  };

  return (
    <div className="ParentForm">
      <h1>Parent Form</h1>
      <hr></hr>
      <Form onSubmit={handleSubmit}>
        {/* student name */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Student Name <sup>*</sup>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Student Name"
              value={formValue.studentName}
              required="on"
              onChange={handleChangeStudentName}
            />
          </Col>
        </Form.Group>
        {/* Parent Name */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Parent Name <sup>*</sup>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Parent Name"
              value={formValue.parentName}
              required="on"
              onChange={handleChangeParentName}
            />
          </Col>
        </Form.Group>
        {/* Student Registration number */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Student Register Number <sup>*</sup>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="studentRegistrationId"
              required="on"
              value={formValue.studentRegistrationId}
              onChange={handleStudentRegistrationId}
            />
          </Col>
        </Form.Group>
        <Row>
          {/* Address */}
          <Form.Group as={Col} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Address <sup>*</sup>
            </Form.Label>
            <Form.Control
              type="text"
              name="address"
              required="on"
              onChange={(e) =>
                setFormValue({ ...formValue, address: e.target.value })
              }
              value={formValue.address}
            />
          </Form.Group>
          {/* City */}
          <Form.Group as={Col} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              City <sup>*</sup>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              value={formValue.city}
              required="on"
              onChange={handleChangeCity}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {/* Country */}
          <Form.Group as={Col} controlId="formPlaintextCountry">
            <Form.Label>
              Country <sup>*</sup>
            </Form.Label>
            <Form.Select
              name="country"
              id="country"
              required="on"
              onChange={handlecountrychange}
            >
              {countries.map((country) => (
                <option key={country.countrycode} value={country.countrycode}>
                  {country.countryname}{" "}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          {/* state */}
          <Form.Group as={Col} controlId="formPlaintextState">
            <Form.Label>
              State <sup>*</sup>
            </Form.Label>

            <Form.Select
              name="states"
              id="states"
              required="on"
              onChange={(e) =>
                setFormValue({ ...formValue, state: e.target.value })
              }
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}{" "}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          {/* Zipcode */}
          <Form.Group as={Col} controlId="formPlaintextZipCode">
            <Form.Label>
              Zipcode <sup>*</sup>
            </Form.Label>

            <Form.Control
              type="text"
              value={formValue.zipcode}
              required
              onChange={handleChangeZipcode}
            />
          </Form.Group>
        </Row>
        {/* Email */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Email <sup>*</sup>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              name="emailAddress"
              required="on"
              placeholder="email@exapmle.com"
              onChange={(e) =>
                setFormValue({ ...formValue, emailAddress: e.target.value })
              }
              value={formValue.emailAddress}
            />
          </Col>
        </Form.Group>
        {/*   Primary Contact Person Name:*/}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Primary Contact Person <sup>*</sup>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="primaryContactPerson"
              required="on"
              onChange={handleChangePrimaryName}
              value={formValue.primaryContactPerson}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Phone Number <sup>*</sup>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              value={formValue.primaryContactPersonPhoneNumber}
              required="on"
              onChange={handleChangePrimaryPhoneNumber}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Secondary Contact Person <sup>*</sup>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="secondaryContactPerson"
              required="on"
              onChange={handleChangeSecondaryName}
              value={formValue.secondaryContactPerson}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Phone Number <sup>*</sup>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              value={formValue.secondaryContactPersonPhoneNumber}
              required="on"
              onChange={handleChangeSecondaryPhoneNumber}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Age <sup>*</sup>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              min="4"
              required="on"
              name="age"
              onChange={(e) =>
                setFormValue({ ...formValue, age: parseInt(e.target.value) })
              }
              value={formValue.age}
            />
          </Col>
        </Form.Group>
        <hr></hr>
        <div id="submit">
          <Button variant="primary">Submit</Button>
        </div>
      </Form>
    </div>
  );
}
export default ParentForm;
