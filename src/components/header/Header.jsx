import React from "react";
import classes from "./Header.module.css";
const Header = () => {
      return (
          <header className="header">
              <div className={classes.image}>
                <img src="https://free-png.ru/wp-content/uploads/2021/07/free-png.ru-7.png" alt=""/>
              </div>
              <div className={classes.list}>
                  <a href="">Home</a> -
                  <a href="">News</a> -
                  <a href="">Message</a> -
              </div>
          </header>
      );
  }
  export default Header;