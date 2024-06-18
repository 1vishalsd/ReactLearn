import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = UserContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return <div>welcome :{user.username}</div>;
}

export default Profile;
