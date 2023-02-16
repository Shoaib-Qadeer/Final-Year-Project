import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./login.scss";
import IMGE from "./Assets/tech.jpg";
const jwt = require("jsonwebtoken");

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = () => toast("Login Successful!");
  async function loginUser(event) {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.error("Please Enter Both Email and Password");
      return;
    } else {
      const response = await fetch("http://localhost:1337/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.user) {
        localStorage.setItem("token", data.user);
        const user2 = jwt.decode(data.user);
        localStorage.setItem("username", user2.name);

        notify();
        window.location.href = "/dashboard";
      }
      if (data.error) {
        toast.error("Invalid Credentials Please Check your Email or Password");
      }
      if ((data.status = "Invalid Password")) {
        toast.error("Invalid Password");
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
      <div className="cont">
        <div className="container">
          <div className="left">
            <h1>Login</h1>
            <form onSubmit={loginUser}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="inp"
              />
              <br />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="inp"
              />
              <br />
              <input type="submit" className="but inplink" value="Login" />
            </form>
            <div className="text" style={{ "margin-bottom": "40px" }}>
              <h2 className="headi">OR</h2>
            </div>
            <Link
              to="/auth/register"
              className="inplink"
              style={{ "text-decoration": "none" }}
            >
              Signup
            </Link>
          </div>
          <div className="right">
            <img src={IMGE} width="300px" height="500px" alt="Logo" />
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
  );
}

export default App;
