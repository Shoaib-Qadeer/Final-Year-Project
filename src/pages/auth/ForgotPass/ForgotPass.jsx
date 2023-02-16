import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./forgotPass.scss";
const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const notify = () => toast("Password Reset Link Sent to your Email");

  async function resetpassword(event) {
    event.preventDefault();

    if (email === "") {
      toast.error("Please Enter Email");
      return;
    } else {
      const response = await fetch("http://localhost:1337/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (data.user) {
        notify();
        window.location.href = "/dashboard";
      }
      if (data.error) {
        toast.error("Invalid Credentials Please Check your Email or Password");
      }
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url(" +
          "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1600" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="ab">
        <div className="container-inner">
          <div class="form-style-5">
            <form onSubmit={resetpassword}>
              <fieldset>
                <h1 style={{ "padding-top": "20px", "padding-bottom": "20px" }}>
                  Forgot Password
                </h1>

                <input
                  type="email"
                  name="field2"
                  placeholder="Your Email *"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </fieldset>

              <input type="submit" value="Reset Password" />
            </form>

            <div className="linke">
              <Link to="/auth/login">Back to Login</Link>
            </div>
          </div>
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
    </div>
  );
};

export default ForgotPass;
