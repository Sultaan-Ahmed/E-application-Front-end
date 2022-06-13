import MailOutlineOutlined from "@mui/icons-material/MailOutlineOutlined";
import { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const forgotPasswordSubmit = (e) => {
    alert("Your request successfully submitted.");
  };
  return (
    <>
      <div className="forgotPasswordContainer">
        <div className="forgotPasswordBox">
          <h2 className="forgotPasswordHeading">Forgot Password ??</h2>
          <form className="forgotPasswordForm" onSubmit={forgotPasswordSubmit}>
            <div className="forgotPasswordEmail">
              <MailOutlineOutlined />
              <input
                type="email"
                placeholder="email"
                required
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <input type="submit" value="Send" className="forgotPasswordBtn" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
