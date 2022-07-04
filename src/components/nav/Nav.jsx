import React from "react";
import classes from "./Nav.module.css";
import "./Nav.module.css";
import {NavLink} from "react-router-dom";


// classes = {
//     'nav': 'Nav_nav__jdLU9 ul',
// }

// const classNameFunc = ({ isActive }) => (isActive ? "active" : "");
const NavContainer = (props) => {
    return (
        <nav className={classes.nav}>

            <div className={classes.list}>
                <ul>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/dialogs">Posts</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/">News</NavLink></li>
                    <li><NavLink to="/">Photos</NavLink></li>
                    <li><NavLink to="/">Reviews</NavLink></li>
                </ul>
            </div>
            <div>
                <div className={classes.name}><h3>Friends</h3></div>
                <div className={classes.block_friends}>
                    <div>
                        <div className={classes.block_round}>
                            <div className={classes.round}></div>
                        </div>
                        <h5>Alex</h5>
                    </div>
                    <div>
                        <div className={classes.block_round}>
                            <div className={classes.round}></div>
                        </div>
                        <h5>John</h5>
                    </div>
                    <div>
                        <div className={classes.block_round}>
                            <div className={classes.round}></div>
                        </div>
                        <h5>Nick</h5>
                    </div>
                </div>
            </div>

        </nav>
    );
}
export default NavContainer;