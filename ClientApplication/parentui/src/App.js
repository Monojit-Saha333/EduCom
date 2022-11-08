import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ParentFormWrapperComponent from "./ParentFormWrapper/ParentFormWrapperComponent";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent/HomeComponent";
import DetailsComponent from "./DetailsComponent/DetailsComponent";
import Login from "./LoginComponent/Login";
import Register from "./RegistrationComponent/Register";
import NoticeComponent from "./CreateNotice/NoticeComponent";
import Noticeview from "./CreateNotice/ViewNotification";
import Exception from "./Exception";
import Notificationdetails from "./CreateNotice/Notificationdetails";
import Layout from "./Layout";
import { RequireAuth } from "./RequireAuth";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Profile from './Components/Profile';
import ParentInfoTable from './Components/ParentInfoTable';

function App() {
  return (
    <>
    <div id="nav-div">
    <Navbar role={localStorage?.role}/>
    </div>
        <Routes>
          <Route path="/" element={<Layout />}>
          {/* public Routes  */}
              <Route path="/login" element={<Login/>}/>
              <Route path="/SignUp" element={<Register />}/>
              <Route path="/" element={<Home/>}/>

          {/* catch all */}
              <Route path="*" element={<Exception />}></Route>
          {/* private Routes */}  
          <Route  element={<RequireAuth allowedUser={["USER","ADMINISTRATOR"]}/>} >
              <Route path='/Profile' element={<Profile/>}/>
              <Route path="/Parents" element={<ParentInfoTable />} />
              <Route path="/DisplayNotices" element={<Noticeview />}></Route>
              <Route path="/Notificationdetails" element={<Notificationdetails />} />
          </Route> 
          <Route  element={<RequireAuth allowedUser={["ADMINISTRATOR"]}/>} >
          <Route path="/Notice" element={<NoticeComponent />}></Route>
          </Route>
          <Route  element={<RequireAuth allowedUser={["USER"]}/>} >
          <Route path="/create" element={<ParentFormWrapperComponent />} />
          </Route>
            
             
      </Route>
        </Routes>
     
    </>
  );
}
export default App;
