import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NoticeComponent from "./CreateNotice/NoticeComponent";
import Noticeview from "./CreateNotice/ViewNotification";
import Notificationdetails from "./CreateNotice/Notificationdetails";
import Layout from "./Layout";
import RegistrationForm from "./Components/RegistrationForm"
import { RequireAuth } from "./RequireAuth";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Profile from './Components/Profile';
import UserEditFrom from './Components/UserEditForm';
import ParentInfoTable from './Components/ParentInfoTable';
import ParentProfile from './Components/ParentProfile';


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
              <Route path="/SignUp" element={<Signup/>}/>
              <Route path="/ParentProfile" element={<ParentProfile/>}></Route>
              <Route path="/User/Update" element={<UserEditFrom/>}></Route>
              <Route path="/AddParentDetails" element={<RegistrationForm/>} />
              <Route path="/" element={<Home/>}/>

          {/* catch all */}
              {/* <Route path="*" element={<Exception />}></Route> */}
          {/* private Routes */}  
          <Route  element={<RequireAuth allowedUser={["USER","ADMIN"]}/>} >
              <Route path='/Profile' element={<Profile/>}/>
              <Route path="/Parents" element={<ParentInfoTable />} />
              <Route path="/DisplayNotices" element={<Noticeview />}></Route>
              <Route path="/Notificationdetails" element={<Notificationdetails />} />
          </Route> 
          <Route  element={<RequireAuth allowedUser={["ADMIN"]}/>} >
          <Route path="/Notice" element={<NoticeComponent />}></Route>
         
          </Route>
          <Route  element={<RequireAuth allowedUser={["USER"]}/>} >
         
          </Route>
            
             
      </Route>
        </Routes>
     
    </>
  );
}
export default App;
