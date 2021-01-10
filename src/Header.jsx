import React from "react";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src="" alt="DR" />
        <h4>Durgesh Rai</h4>
      </div>
    </div>
  );
}

export default Header;
