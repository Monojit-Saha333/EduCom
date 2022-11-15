import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState, useEffect } from "react";
import ParentTableData from './ParentTableData';
function ParentInfoTableComponent() {
  const [Listofparent, setListofparent] = useState([]);
  useEffect(() => {
    const response =axios({
      url: "https://localhost:44309/ParentsDetails",
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.accessToken },
    }).then((response)=>{
      setListofparent(response.data);
      console.log(response.data)
    })
   

  }, []);

  return (
    <Container>
      <Card>
      <Card.Header>
      <div id="Parent-table-top">
      <Row>
          <Col>
            Student Name
          </Col>
          <Col>
            Parent Name
          </Col>
          <Col>
            Email </Col>
        </Row>
        </div>
        </Card.Header>
        <Card.Body>
        {Listofparent.map((record) => (
          <ParentTableData record={record} key={record.registationId} />
        ))}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ParentInfoTableComponent;
