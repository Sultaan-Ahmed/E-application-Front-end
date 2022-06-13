import { Link } from "react-router-dom";
import profilePng from "../../images/me.jpg";
import "./Profile.css";
const user = {
  name: "Md Sultan Ahmed.",
  email: "sultan@gmail.com",
  createdAt: new Date(Date.now()),
};
const Profile = () => {
  return (
    <>
      <div className="profileContainer">
        <div>
          <h1>My Profile.</h1>
          <img src={profilePng} alt="profile" />
          <Link to="/me/update">Edit Profile</Link>
        </div>
        <div>
          <div>
            <h4>Full Name</h4>
            <p>{user.name}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{user.email}</p>
          </div>
          <div>
            <h4>Joined On</h4>
            <p>{String(user.createdAt).substr(0, 10)}</p>
          </div>
          <div>
            <Link to="/orders">My orders</Link>
            <Link to="/password/update">Change Password</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
