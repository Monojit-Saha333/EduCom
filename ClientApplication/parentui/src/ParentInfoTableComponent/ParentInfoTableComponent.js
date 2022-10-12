import { Card, Container } from "react-bootstrap";
import TableRow from "../TableRowComponent/TableRow";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ParentInfoTableComponent.css";

function ParentInfoTableComponent({ data }) {
  return (
    <Container>
      <br></br>
      <Card>
      {/* <hr></hr> */}
      <Row style={{"paddingTop":"10px"}}>
       <Col><h4>Student Name</h4></Col>
              <Col><h4>Parent Name</h4></Col>
              <Col><h4>Email Address</h4></Col>
        </Row>
        <hr></hr>
            {data.map((record) => (
              <TableRow record={record} key={record.registationId} />
            ))}
      </Card>
    </Container>
  );
}

export default ParentInfoTableComponent;
