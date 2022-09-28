import React, { useState } from "react";
import { countries } from "./country";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";

function PostUserData(userData) {
  axios
    .post("https://localhost:44309/Parents", userData)
    .then((response) => console.log(response));
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
    age: 0
  });
  const [userData, setuserData] = useState(null);
  const states = countries.find(
    (country) => country.countrycode === formValue.country
  ).states;
  console.log(states);
  const handleSubmit = (e) => {
    e.preventDefault();
    PostUserData(formValue);
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
    setFormValue({ ...formValue, secondaryContactPersonPhoneNumber: elm.value });
  };

  return (
    <div className="ParentForm">
      <h1>Parent Form</h1>
      <Form onSubmit={handleSubmit}>
        {/* student name */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Student Name
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
            Parent Name
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
            Student Registration Number:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="studentRegistrationId"
              required="on"
              onChange={(e) =>
                setFormValue({
                  ...formValue,
                  studentRegistrationId: e.target.value,
                })
              }
              value={formValue.studentRegistrationId}
            />
          </Col>
        </Form.Group>
        <Row>
          {/* Address */}
          <Form.Group as={Col} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Address:
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
              City
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
            <Form.Label>Country</Form.Label>
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
            <Form.Label>State</Form.Label>

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
            <Form.Label>Zipcode:</Form.Label>

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
            Email:
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
            Primary Contact Person Name:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="primaryContactPerson"
              required="on"
              onChange={(e) =>
                setFormValue({
                  ...formValue,
                  primaryContactPerson: e.target.value,
                })
              }
              value={formValue.primaryContactPerson}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Primary Contact Person Number:
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
            Secondary Contact Person Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="secondaryContactPerson"
              required="on"
              onChange={(e) =>
                setFormValue({
                  ...formValue,
                  secondaryContactPerson: e.target.value,
                })
              }
              value={formValue.secondaryContactPerson}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Secondary Contact Person Number:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              value={formValue.secondaryContactPersonPhoneNumbernp}
              required="on"
              onChange={handleChangeSecondaryPhoneNumber}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Age:
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
        
        <Button type="submit" value="submit">
          submit
        </Button>
      </Form>
    </div>
  );
}
export default ParentForm;
