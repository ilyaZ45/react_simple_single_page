import classes from "./Users.module.css";
import UU from "../../../assets/images/UU.png";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 10) {
            pages.push(i);
        }
    }
    return <div className={classes.content}>
        <div>
            {pages.map((p, index) => (
                <span key={index} className={props.currentPage === p ? classes.selectedPage : ''}
                      onClick={(e) => {
                          props.onPageChanged(p)
                      }}>{p}</span>
            ))}
        </div>
        {
            props.users.map((u, index) => <div key={index}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        {/*<NavLink to={'/profile'}>*/}
                            {/*<img src={u.photoUrl} className={classes.usersPhoto}/>*/}
                            <img src={u.photos.small !== null ? u.photos.small : UU} className={classes.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API_KEY": '2206b1e9-b69a-4a8d-b96c-be2ccfcb4896'
                                    },
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    })
                            }}>UnFollow</button> :
                            <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API_KEY": '2206b1e9-b69a-4a8d-b96c-be2ccfcb4896'
                                    },
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    })
                            }}>Follow</button>}
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