import React,{useContext} from 'react'
import Navbar from "./Navbar"
import {useLocation} from "react-router-dom"
import NoticeComponent from '../CreateNotice/NoticeComponent';
import Noticeview from '../CreateNotice/ViewNotification';
import Login from '../LoginComponent/Login';
import AuthorizeContext from '../AuthContextComponent/AuthContextProvider'
import Welcome from './Welcome';

const Home = () => {
  const {AuthState} = useContext(AuthorizeContext);

   if(localStorage?.role==null)
  return (
    <>
    <Login/>
    </>)

    else
    return (
      <div>
          <Welcome username={localStorage.username}/>
      </div>
    )
}

export default Home;