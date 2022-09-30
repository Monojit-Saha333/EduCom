import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ParentForm from "../FormComponent/Form";

function ParentFormWrapperComponent() {
  return (
    <Container><br></br>
      <Card>
        <Card.Body>
          <ParentForm />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ParentFormWrapperComponent;
