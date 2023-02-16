import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import "./Navbar.scss";
const Nabvar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search...." />
          <SearchIcon />
        </div>

        <div className="items">
          <div className="item">
            <FullscreenIcon classname="icon" />
          </div>
          <div className="item">
            <LanguageIcon classname="icon" />
          </div>
          <div className="item">
            <ChatBubbleIcon classname="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <NotificationAddIcon classname="icon" />
          </div>
          <div className="item">
            <img
              src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
              alt=""
              classname="avatar"
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
