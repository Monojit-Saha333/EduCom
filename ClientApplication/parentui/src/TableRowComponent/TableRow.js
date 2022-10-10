import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";

import { Link } from "react-router-dom";
const TableRow = (props) => {
  const { record } = props;
  //   console.log(data);
  //   const [record, setrecord] = useState(data);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  //   const [deletedata, setdeletedata] = useState({
  //     registationId: "",
  //     studentName: "",
  //     parentName: "",
  //     studentRegistrationId: "",
  //     address: "",
  //     state: "",
  //     country: "",
  //     city: "",
  //     zipcode: "",
  //     emailAddress: "",
  //     primaryContactPerson: "",
  //     primaryContactPersonPhoneNumber: "",
  //     secondaryContactPerson: "",
  //     secondaryContactPersonPhoneNumber: "",
  //     age: 0,
  //   });
  const displaymodal = () => {
    // setdeletedata(record);
    setShowDeleteModal(true);
  };
  const hidemodal = () => setShowDeleteModal(false);
  const handleDelete = () => {
    const url = "https://localhost:44309/DeleteParents?id=".concat(
      record.registationId
    );
    axios({
      url: url,
      method: "DELETE",
      headers: {},
    }).then((response) => {
      console.log(response);
    });
    hidemodal();
    window.location.reload();
  };
  return (
    <>
      <tr>
        <td>{record.studentName}</td>
        <td>{record.parentName}</td>
        <td>{record.emailAddress}</td>
        {/* {JSON.stringify(record)} */}
        <td>
          <Link
            variant="success"
            to={"details"}
            state={JSON.stringify(record)}
            key={record.key}
          >
            <Button>Edit</Button>
          </Link>
          <Button variant="warning" onClick={displaymodal}>
            Delete
          </Button>
        </td>
        <Modal show={showDeleteModal}>
          <ModalHeader>warning</ModalHeader>
          <ModalBody>Are you sure you want to delete ?</ModalBody>
          <ModalFooter>
            <Button onClick={hidemodal}>Cancel</Button>
            <Button onClick={handleDelete}>ok</Button>
          </ModalFooter>
        </Modal>
      </tr>
    </>
  );
};

export default TableRow;
