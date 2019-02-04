import React from "react";

const Profile = ({ user }) => {
  return (
    <div>
        <h1> Hello {user.name}</h1>
      <hr />
    </div>
  );
};

export default Profile;