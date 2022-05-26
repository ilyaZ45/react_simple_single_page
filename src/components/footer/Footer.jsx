import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
      return (
          <footer className="footer">
          <div className={classes.list}>
              <a href="">Home</a> -
              <a href="">News</a> -
              <a href="">Message</a> -
          </div>
          </footer>
      );
  }
  export default Footer;