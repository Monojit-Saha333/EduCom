import { Card, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function ParentInfoTableComponent({ data }) {
  return (
    <Container><br></br>
      <Card>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Parent Name</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record) => (
              <tr>
                <td>{record.studentName}</td>
                <td>{record.parentName}</td>
                <td>{record.emailAddress}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default ParentInfoTableComponent;
