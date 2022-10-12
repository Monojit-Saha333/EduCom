import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarComponent from "./NavBarComponent/NavbarComponent";
import ParentFormWrapperComponent from "./ParentFormWrapper/ParentFormWrapperComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent/HomeComponent";
import DetailsComponent from "./DetailsComponent/DetailsComponent";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="details" element={<DetailsComponent />} />
          <Route path="create" element={<ParentFormWrapperComponent />} />
          <Route path="" element={<HomeComponent />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
        </Routes>
        <div className="App">{/*<ParentFormWrapperComponent />*/}</div>
      </BrowserRouter>
    </>
  );
}

export default App;
