import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WalletIcon from "@mui/icons-material/Wallet";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "./Sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  function logout() {
    toast.error("You Have been Logged Out");
    localStorage.removeItem("token");
    navigate("/auth/login");
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Learn</span>
          <span className="logo2">X</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN </p>
          <Link to="/dashboard">
            <li>
              <DashboardIcon sx={{ fontSize: 24, color: "purple" }} />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">Questions </p>
          <Link to="/questions/add">
            <li>
              <AddCircleOutlineIcon
                classname="icon"
                sx={{ fontSize: 24, color: "purple" }}
              />
              <span>Ask a New Question</span>
            </li>
          </Link>
          <Link to="/questions/">
            <li>
              <QuestionAnswerIcon
                classname="icon"
                sx={{ fontSize: 24, color: "purple" }}
              />
              <span>View All Questions</span>
            </li>
          </Link>
          <li>
            <QueryStatsIcon
              classname="icon"
              sx={{ fontSize: 24, color: "purple" }}
            />
            <span>View Stats</span>
          </li>
          <p className="title"> Services </p>
          <li>
            <WalletIcon
              classname="icon"
              sx={{ fontSize: 24, color: "purple" }}
            />
            <span>Wallet</span>
          </li>
          <Link to="/myprofile">
            <li>
              <AccountBoxIcon
                classname="icon"
                sx={{ fontSize: 24, color: "purple" }}
              />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={logout}>
            <LogoutIcon
              classname="icon"
              sx={{ fontSize: 24, color: "purple" }}
            />
            <span>Logout</span>
          </li>

          <p className="title">Color Options </p>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
