import React from "react";
import classes from "./Nav.module.css";

// classes = {
//     'nav': 'Nav_nav__jdLU9 ul',
// }
const Nav = () => {
      return (
          <nav className={classes.nav}>
              <div>
                  <ul>
                    <li><a href="">News</a></li>
                    <li><a href="">Posts</a></li>
                    <li><a href="">Photos</a></li>
                    <li><a href="">Reviews</a></li>
                  </ul>
              </div>
          </nav>
      );
  }
  export default Nav;