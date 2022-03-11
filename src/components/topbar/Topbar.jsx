import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AdminDashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://ritecaremedicalofficepc.com/wp-content/uploads/2019/09/img_avatar.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
