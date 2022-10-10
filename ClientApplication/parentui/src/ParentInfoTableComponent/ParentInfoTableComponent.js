import { Card, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TableRow from "../TableRowComponent/TableRow";

function ParentInfoTableComponent({ data }) {
  return (
    <Container>
      <br></br>
      <Card>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Parent Name</th>
              <th>Email Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record) => (
              <TableRow record={record} key={record.registationId} />
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default ParentInfoTableComponent;
