import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
const Header = (props) => {
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
              <div className={classes.loginBlock}>
                  { props.isAuth ? props.login :
                  <NavLink to={'/login'}>Login</NavLink>}
              </div>
          </header>
      );
  }
  export default Header;