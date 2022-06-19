import classes from "./Users.module.css";
import UU from "../../../assets/images/UU.png";
import React from "react";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount /props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            if (i <= 10) {
                pages.push(i);
            }
        }
    return <div>
            <div>
                {pages.map((p,index) => (
                    <span key={index} className={props.currentPage===p ? classes.selectedPage : ''}
                    onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                ))}
            </div>
            {
                props.users.map((u,index) => <div key={index}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        {/*<NavLink to={'/profile'}>*/}
                            {/*<img src={u.photoUrl} className={classes.usersPhoto}/>*/}
                            <img src={u.photos.small != null ? u.photos.small : UU} className={classes.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>UnFollow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        {/*<div>{u.fullName}</div><div>{u.status}</div><div>{u.id}</div>*/}
                        <div>{u.name}</div><div>{u.id}</div>
                    </span>
                    {/*<span>*/}
                    {/*    <div>{u.location.country}</div><div>{u.location.city}</div>*/}
                    {/*</span>*/}
                </span>
                    </div>
                )}
        </div>
}
export default Users;