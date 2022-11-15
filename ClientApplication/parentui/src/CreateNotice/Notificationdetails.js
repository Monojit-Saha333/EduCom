import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Container, Modal, Button } from "react-bootstrap";
import axios from "axios";
import ModalViews from "../Components/ModalViews";

const Notificationdetails = () => {
  const location = useLocation();
  const noticedata = location.state;
  const navigate = useNavigate();
  const [ShowDeleteModal, setShowDeleteModal] = useState(false);
  const handleUpdate = async () => {
    try {
      const response = await axios({
        url: "https://localhost:44318/updateNotice",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.accessToken,
        },
        data: noticedata,
      });
    } catch (error) {
      alert("problem in updating");
    }
  };
  const handleDelete = async () => {
    try {
      const response = await axios({
        url: "https://localhost:44318/delete?id=" + noticedata.noticeId,
        method: "Delete",
        headers: {
          Authorization: "Bearer " + localStorage.accessToken,
        },
      });
      navigate("/DisplayNotices");
    } catch (error) {
      alert("problem in Deletion");
    }
  };

  if (noticedata == null) navigate("/error");
  return (
    <div>
      <ModalViews
        show={ShowDeleteModal}
        Message="Are you sure you want to delete?"
        buttontext={"Yes"}
        buttonclickevent={handleDelete}
        cancelbuttonclickevent={() => setShowDeleteModal(false)}
      />
      <Container>
        <Card>
          <Card.Header>
            <h6>Notice</h6>
          </Card.Header>
          <Card.Body>
            <p>
              Date: {noticedata.notificationDate.substr(0, 10)} Time:{" "}
              {noticedata.notificationDate.substr(11, 8)}
            </p>
            <p> Subject : {noticedata.subject}</p>
            <p>{noticedata.body}</p>
          </Card.Body>
          <Card.Footer>
            <DeleteButton setShowDeleteModal={setShowDeleteModal} />
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

const DeleteButton = ({ setShowDeleteModal }) => {
  if (localStorage.role === "Admin")
    return (
      <Button
        variant="danger"
        style={{ float: "right", marginLeft: "4px" }}
        onClick={() => setShowDeleteModal(true)}
      >
        Delete Notice
      </Button>
    );
};
export default Notificationdetails;
