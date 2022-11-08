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
        <Row>
          <Col>
            <h4>Student Name</h4>
          </Col>
          <Col>
            <h4>Parent Name</h4>
          </Col>
          <Col>
            <h4>Email Address</h4>
          </Col>
        </Row>
        {Listofparent.map((record) => (
          <ParentTableData record={record} key={record.registationId} />
        ))}
      </Card>
    </Container>
  );
}

export default ParentInfoTableComponent;
