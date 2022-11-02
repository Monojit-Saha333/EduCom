import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarComponent from "./NavBarComponent/NavbarComponent";
import ParentFormWrapperComponent from "./ParentFormWrapper/ParentFormWrapperComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent/HomeComponent";
import DetailsComponent from "./DetailsComponent/DetailsComponent";
import Login from "./LoginComponent/Login";
import Register from "./RegistrationComponent/Register";
import NoticeComponent from "./CreateNotice/NoticeComponent";
import Noticeview from "./CreateNotice/ViewNotification";
import Exception from "./Exception";
import Notificationdetails from "./CreateNotice/Notificationdetails"

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
          <Route path="/Notice" element ={<NoticeComponent/>}></Route>
          <Route path="/Notices" element ={<Noticeview/>}></Route>
          <Route path="/Notificationdetails" element ={<Notificationdetails/>}></Route>
          <Route path="/error" element={<Exception/>}></Route>
        </Routes>
        <div className="App">{/*<ParentFormWrapperComponent />*/}</div>
      </BrowserRouter>
    </>
  );
}
export default App;
