import React from "react";
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body() {
  return (
    <div className="Body">
      <Header />
      <div className="body__info">
        <img
          src="https://mosaic.scdn.co/300/ab67616d0000b27317f944d8cad77bc712348998ab67616d0000b27327cc10e79ef3cc7d5fddf3f6ab67616d0000b27392ee1100f2280035c8a02793ab67616d0000b273ac66c9ec53e1bf7c7d877811"
          alt="image__icon"
        />
        <div className="body__infotext">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description...</p>
        </div>
      </div>
      <div className="body__song">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        <SongRow />
        <SongRow />
      </div>
    </div>
  );
}

export default Body;
