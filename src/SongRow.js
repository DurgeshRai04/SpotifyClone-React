import React from "react";
import "./SongRow.css";

function SongRow() {
  return (
    <div className="songRow">
      <img
        className="songRow__album"
        src="https://images.genius.com/e1f97e064df515cbd3bee7c533cd040c.1000x1000x1.jpg"
        alt="album__logo"
      />
      <div className="songRow__info">
        <h1>Only God can Judge Me</h1>
        <p>Tupac</p>
      </div>
    </div>
  );
}

export default SongRow;
