import React from "react";
import UserProfile from './UserProfile';
import AdminProfile from './AdminProfile';

const Profile = () => {
  if (localStorage.role === "User") {
    return (
      <>
        <UserProfile />
      </>
    );
  }
   else {
    return (
      <>
        <AdminProfile />
      </>
    );
  }
};

export default Profile;
