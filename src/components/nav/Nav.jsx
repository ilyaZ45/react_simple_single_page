import React from "react";
import classes from "./Nav.module.css";
import "./Nav.module.css";
import {NavLink} from "react-router-dom";


// classes = {
//     'nav': 'Nav_nav__jdLU9 ul',
// }

// const classNameFunc = ({ isActive }) => (isActive ? "active" : "");
const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink  to="/dialogs">Posts</NavLink></li>
                <li><NavLink  to="/news">News</NavLink></li>
                <li><NavLink  to="/">Photos</NavLink></li>
                <li><NavLink  to="/">Reviews</NavLink></li>
            </ul>
        </nav>
    );
}
export default Nav;