import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Body from "./Body";

function Player() {
  return (
    <div className="Player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
