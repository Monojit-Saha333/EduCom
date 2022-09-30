import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import ParentForm from "./FormComponent/Form";
import NavBarComponent from "./NavBarComponent/NavbarComponent";
import ParentFormWrapperComponent from "./ParentFormWrapper/ParentFormWrapperComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent/HomeComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="create" element={<ParentFormWrapperComponent />}></Route>

          <Route path="" element={<HomeComponent />}></Route>
        </Routes>
        <div className="App">{/* <ParentFormWrapperComponent /> */}</div>
      </BrowserRouter>
    </>
  );
}

export default App;
