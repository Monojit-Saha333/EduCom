import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalViews = ({ show ,setShow,Message, setMessage,buttontext,buttonclickevent,cancelbuttonclickevent }) => {
  return (
    <>
    <Modal show={show}>
    <Modal.Body>{Message}</Modal.Body>
    <Modal.Footer>
      <Button onClick={buttonclickevent}>{buttontext}</Button>
      <Button onClick={cancelbuttonclickevent}>cancel</Button>
    </Modal.Footer>
    </Modal>
     
    </>
  );
};

export default ModalViews;
