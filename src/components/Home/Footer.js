import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <p>© 2021 Airbnb clone. Privacy · Terms · Sitemap · Company Details</p>
        <div class="social">
          <a href="https://www.facebook.com/oskee3/">
            <FacebookIcon className="social-icon" />
          </a>
          <a href="https://www.instagram.com/ozgeecsknnn/">
            <InstagramIcon className="social-icon" />
          </a>
          <a href="https://twitter.com/oskee3">
            <TwitterIcon className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/%C3%B6zge-co%C5%9Fkun-g%C3%BCrsucu-28380987/">
            <LinkedInIcon className="social-icon" />
          </a>
        </div>
      </div>
      <p>Created by CoderMother</p>
    </div>
  );
}

export default Footer;
