import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./resetpass.scss";
function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { token } = useParams();

  useEffect(() => {
    // Verify the JWT
    axios
      .get(`/reset/${token}`)
      .then((response) => {
        if (response.data.error) {
          setError(response.data.error);
        }
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  }, [token]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the server to reset the password
    axios
      .post(`http://localhost:1337/api/reset/${token}`, { password })
      .then((response) => {
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  if (error) {
    // return <div>{error}</div>;
    toast.error(error);
  }

  if (success) {
    // return <div>Your password has been successfully reset!</div>;
    toast.success("Your password has been successfully reset!");
    window.location.href = "/auth/login";
  }

  return (
    <div className="resetpass">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={20000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ResetPasswordForm;
