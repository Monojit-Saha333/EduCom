import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { countries } from "../FormComponent/country";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Card, Container, Modal } from "react-bootstrap";
import axios from "axios";

var DetailsComponent = () => {
  const location = useLocation();
  const state = JSON.parse(location.state);
  const [formValue, setformValue] = useState(
    {
      registationId: "",
      studentName: "",
      parentName: "",
      studentRegistrationId: "",
      address: "",
      state: "",
      country: "IN",
      city: "",
      zipcode: "",
      emailAddress: "",
      primaryContactPerson: "",
      primaryContactPersonPhoneNumber: "",
      secondaryContactPerson: "",
      secondaryContactPersonPhoneNumber: "",
      age: 0,
    }
    // state
  );
  const [showUpdatedModal, setShowUpdateModal] = useState(false);
  const hidemodal = () => setShowUpdateModal(false);

  const url = "https://localhost:44309/Parents/".concat(state.registationId);
  useEffect(() => {
    axios({
      url: url,
      method: "GET",
      headers: {},
    }).then((response) => {
      setformValue(response.data);
    });
  }, [url]);
  console.log(formValue.country);
  // console.log(formValue);

  const states = countries.find(
    (country) => country.countrycode === formValue.country
  ).states;

  const updateDetails = (formValue) => {
    axios({
      url: "https://localhost:44309/UpdateParents",
      method: "PUT",
      Headers: {},
      data: formValue,
    }).then((res) => console.log(res));
    setShowUpdateModal(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(formValue);
    updateDetails(formValue);
  };
  const handlecountrychange = (e) => {
    setformValue({ ...formValue, country: e.target.value });
  };
  const handleChangeStudentName = (e) => {
    if (e.target.value.match("^[a-zA-Z ]*$") != null) {
      setformValue({ ...formValue, studentName: e.target.value });
    }
  };
  const handleChangePrimaryName = (e) => {
    if (e.target.value.match("^[a-zA-Z ]*$") != null) {
      setformValue({ ...formValue, primaryContactPerson: e.target.value });
    }
  };
  const handleStudentRegistrationId = (e) => {
    if (e.target.value === "")
      setformValue({ ...formValue, studentRegistrationId: e.target.value });
    if (e.target.value.match(/^R/)) {
      setformValue({ ...formValue, studentRegistrationId: e.target.value });
    }
  };

  const handleChangeSecondaryName = (e) => {
    if (e.target.value.match("^[a-zA-Z ]*$") != null) {
      setformValue({ ...formValue, secondaryContactPerson: e.target.value });
    }
  };

  const handleChangeParentName = (e) => {
    if (e.target.value.match("^[a-zA-Z ]*$") != null) {
      setformValue({ ...formValue, parentName: e.target.value });
    }
  };

  const handleChangeZipcode = (e) => {
    const elm = e.target;
    const zipcodeMaxLength = 6;
    const zipcodeRegex = "^[0-9]*$";

    if (!elm.value.match(zipcodeRegex)) return;

    if (elm.value.length > zipcodeMaxLength) return;
    setformValue({ ...formValue, zipcode: elm.value });
  };
  const handleChangeCity = (e) => {
    if (e.target.value.match("^[a-zA-Z]*$") != null) {
      setformValue({ ...formValue, city: e.target.value });
    }
  };
  const handleChangePrimaryPhoneNumber = (e) => {
    const elm = e.target;
    const phoneNumberMaxLength = 10;
    const phoneNumberRegex = "^[0-9]*$";

    if (!elm.value.match(phoneNumberRegex)) return;

    if (elm.value.length > phoneNumberMaxLength) return;
    setformValue({ ...formValue, primaryContactPersonPhoneNumber: elm.value });
  };
  const handleChangeSecondaryPhoneNumber = (e) => {
    const elm = e.target;
    const phoneNumberMaxLength = 10;
    const phoneNumberRegex = "^[0-9]*$";

    if (!elm.value.match(phoneNumberRegex)) return;

    if (elm.value.length > phoneNumberMaxLength) return;
    setformValue({
      ...formValue,
      secondaryContactPersonPhoneNumber: elm.value,
    });
  };

  return (
    <div>
      <br></br>
      <Container>
        <Card>
          <h1> Update Details</h1>
          <hr></hr>
          <Form onSubmit={handleUpdate}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column md="4">
                Registration ID<sup>*</sup>
              </Form.Label>
              <Col md="8">
                <Form.Control
                  type="text"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  value={formValue.registationId}
                  required="on"
                  disabled
                />
              </Col>
            </Form.Group>
            {/* student name */}
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column md="4">
                Student Name <sup>*</sup>
              </Form.Label>
              <Col md="8">
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
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column md="4">
                Parent Name <sup>*</sup>
              </Form.Label>
              <Col md="8">
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
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column md="4">
                Student Register Number <sup>*</sup>
              </Form.Label>
              <Col md="8">
                <Form.Control
                  type="text"
                  name="studentRegistrationId"
                  required="on"
                  placeholder="RXXXXXXX"
                  value={formValue.studentRegistrationId}
                  onChange={handleStudentRegistrationId}
                  disabled
                />
              </Col>
            </Form.Group>
            <Row>
              {/* Address */}
              <Form.Group as={Col} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  Address <sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="House No Street Name"
                  required="on"
                  onChange={(e) =>
                    setformValue({ ...formValue, address: e.target.value })
                  }
                  value={formValue.address}
                />
              </Form.Group>
              {/* City */}
              <Form.Group as={Col} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
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
                    <option
                      key={country.countrycode}
                      value={country.countrycode}
                    >
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
                    setformValue({ ...formValue, state: e.target.value })
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
                  placeholder="Zipcode"
                  required
                  onChange={handleChangeZipcode}
                />
              </Form.Group>
            </Row>
            {/* Email */}
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column md="4">
                Email <sup>*</sup>
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="email"
                  name="emailAddress"
                  required="on"
                  placeholder="email@example.com"
                  onChange={(e) =>
                    setformValue({ ...formValue, emailAddress: e.target.value })
                  }
                  value={formValue.emailAddress}
                />
              </Col>
            </Form.Group>
            {/*   Primary Contact Person Name:*/}
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column md="4">
                Primary Contact Person <sup>*</sup>
              </Form.Label>
              <Col md="8">
                <Form.Control
                  type="text"
                  name="primaryContactPerson"
                  placeholder="Primary Contact Name"
                  required="on"
                  onChange={handleChangePrimaryName}
                  value={formValue.primaryContactPerson}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column md="4">
                Phone Number <sup>*</sup>
              </Form.Label>
              <Col md="8">
                <Form.Control
                  type="text"
                  value={formValue.primaryContactPersonPhoneNumber}
                  placeholder="Phone Number"
                  required="on"
                  onChange={handleChangePrimaryPhoneNumber}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column md="4">
                Secondary Contact Person <sup>*</sup>
              </Form.Label>
              <Col md="8">
                <Form.Control
                  type="text"
                  name="secondaryContactPerson"
                  required="on"
                  placeholder="Secondary Contact Person"
                  onChange={handleChangeSecondaryName}
                  value={formValue.secondaryContactPerson}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column md="4">
                Phone Number <sup>*</sup>
              </Form.Label>
              <Col md="8">
                <Form.Control
                  type="text"
                  value={formValue.secondaryContactPersonPhoneNumber}
                  required="on"
                  placeholder="Secondary Contact person"
                  onChange={handleChangeSecondaryPhoneNumber}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column md="4">
                Age <sup>*</sup>
              </Form.Label>
              <Col md="8">
                <Form.Control
                  type="number"
                  min="4"
                  required="on"
                  name="age"
                  placeholder="Age must be greater than 4 "
                  onChange={(e) =>
                    setformValue({
                      ...formValue,
                      age: parseInt(e.target.value),
                    })
                  }
                  value={formValue.age}
                />
              </Col>
            </Form.Group>
            <hr></hr>

            <Button
              className="float-right"
              size="lg"
              variant="primary"
              type="submit"
              id="submit"
              style={{ float: "right" }}
            >
              Update
            </Button>
          </Form>
        </Card>
      </Container>
      <Modal show={showUpdatedModal}>
        <Modal.Body>
          <Table borderless>
            <tr>
              <td> Student ID</td>
              <td> {formValue.studentRegistrationId}</td>
            </tr>
            <tr>
              <td> Student Name:</td>
              <td>{formValue.studentName}</td>
            </tr>
            <tr>
              <td>Parent Name:</td>
              <td>{formValue.parentName}</td>
            </tr>
            <tr>
              <td>Status :</td>
              <td>Updated</td>
            </tr>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hidemodal}>OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetailsComponent;
