import React, { useState } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://images.genius.com/e1f97e064df515cbd3bee7c533cd040c.1000x1000x1.jpg"
          alt="album__logo"
        />
        <div className="footer__songinfo">
          <h4>Only God can Judge me</h4>
          <p>Tupac</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <PlaylistPlayIcon
          className="footer__right__playlistIcon"
          fontSize="large"
        />
        <VolumeDownIcon />
        <Slider
          className="footer__right__slider"
          aria-labelledby="continuous-slider"
        />
      </div>
    </div>
  );
}

export default Footer;
