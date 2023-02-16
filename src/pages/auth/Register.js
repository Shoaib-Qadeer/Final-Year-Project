import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { TagsInput } from "react-tag-input-component";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./login.scss";
import IMGE from "./Assets/tech.jpg";

const jwt = require("jsonwebtoken");

function App() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState(["react"]);
  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        selected,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      navigate("/auth/login");
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
            <h1>Register</h1>
            <form onSubmit={registerUser}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="inp"
              />
              <br />
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

              <div style={{ borderRadius: "50px" }}>
                <TagsInput
                  value={selected}
                  onChange={setSelected}
                  name="qdomain"
                  placeHolder="Your Skills"
                />
              </div>
              <br />
              <input type="submit" className="inplink" value="Register" />
            </form>
            <div className="text" style={{ "margin-bottom": "40px" }}>
              <h2 className="headi">OR</h2>
            </div>
            <Link
              to="/auth/login"
              className="inplink"
              style={{ "text-decoration": "none" }}
            >
              Login
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
