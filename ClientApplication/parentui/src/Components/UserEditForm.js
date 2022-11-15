import React, { useState } from "react";
import { countries } from "./country";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ModalViews from "./ModalViews";

function UserEditForm() {
  const user = localStorage.username;
  const uselocation = useLocation();
  const userData = uselocation.state;
  console.log(userData);
  const [formValue, setFormValue] = useState({
    registationId: userData.registationId,
    studentRegistrationId: userData.registationId,
    studentName: userData.studentName,
    userName: userData.userName,
    parentName: userData.parentName,
    address: userData.address,
    state: userData.state,
    country: "IN",
    city: userData.city,
    zipcode: userData.zipcode,
    emailAddress: userData.emailAddress,
    primaryContactPerson: userData.primaryContactPerson,
    primaryContactPersonPhoneNumber: userData.primaryContactPersonPhoneNumber,
    secondaryContactPerson: userData.secondaryContactPerson,
    secondaryContactPersonPhoneNumber:
      userData.secondaryContactPersonPhoneNumber,
    age: userData.age,
  });
  const [showdisplayModal, setshowdisplayModal] = useState(false);
  const navigate = useNavigate();
  const states = countries.find(
    (country) => country.countrycode === formValue.country
  ).states;
const UpdateUserData=async (userData)=> {
    return await axios
      .put("https://localhost:44309/UpdateParents", userData, {
        headers: {
          Authorization: "bearer " + localStorage.accessToken,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    await UpdateUserData(formValue);
    setshowdisplayModal(true);
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
    <>
      <Container>
        <Card>
          <Card.Header>Register</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
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
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column md="4">
                  Registration Id <sup>*</sup>
                </Form.Label>
                <Col md="8">
                  <Form.Control
                    type="text"
                    placeholder="Student Name"
                    value={formValue.registationId}
                    required="on"
                    onChange={handleChangeStudentName}
                    disabled
                  />
                </Col>
              </Form.Group>
              {/* username */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column md="4">
                  User Name <sup>*</sup>
                </Form.Label>
                <Col md="8">
                  <Form.Control
                    type="text"
                    placeholder="User Name"
                    value={formValue.userName}
                    required="on"
                    disabled
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
                    value={userData.studentRegistrationId}
                    onChange={handleStudentRegistrationId}
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
                      setFormValue({ ...formValue, address: e.target.value })
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
                      setFormValue({
                        ...formValue,
                        emailAddress: e.target.value,
                      })
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
                      setFormValue({
                        ...formValue,
                        age: parseInt(e.target.value),
                      })
                    }
                    value={formValue.age}
                  />
                </Col>
              </Form.Group>

              <Button
                size="md"
                variant="success"
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
      <ModalViews show={showdisplayModal}
      buttontext={'ok'}
      buttonclickevent={()=>navigate('/Profile')}
      Message={'Details are Updated wait till the Admin\'s approval'}
      />
    </>
  );
}
export default UserEditForm;
