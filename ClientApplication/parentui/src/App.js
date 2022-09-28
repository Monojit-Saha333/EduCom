import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import ParentForm from './FormComponent/Form';


function App() {
  return (
    <div className="App">

<br></br>
<Container>
<Card>
<Card.Body>
<ParentForm></ParentForm>
</Card.Body>
</Card>
</Container>
</div>
  );
    

}

export default App;
