import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
         <a href="https://www.instagram.com/aman_shishodia_007/?next=%2F" target="blank"><InstagramIcon /></a>
        <a href="https://twitter.com/home"><TwitterIcon /></a>
        <a href="https://www.facebook.com/"></a><FacebookIcon />
        <a href="https://www.linkedin.com/in/aman-shishodia-601a09221"><LinkedInIcon /></a>
        <a href="https://github.com/"><GithubIcon /></a>
      </div>
      <p> &copy; 2022 amanportfolio7.com</p>
    </div>
  );
}

export default Footer;