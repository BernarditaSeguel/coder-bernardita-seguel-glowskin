import React from "react";
import InstagramIcon from "../assets/icon-rrss/icon-instagram.svg";
import TwitterIcon from "../assets/icon-rrss/icon-twitter.svg";
import FacebookIcon from "../assets/icon-rrss/icon-facebook.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
      </div>
      <p> &copy; 2022 glowskin.cl</p>
    </div>
  );
}

export default Footer;
