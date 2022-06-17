import React from "react";
import classes from  "./Users.module.css";
import UU from "../../../assets/images/UU.png";
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
    }
    render() {
        return <div>
            {
                this.props.users.map((u,index) => <div key={index}>
                <span>
                    <div>
                        {/*<img src={u.photoUrl} className={classes.usersPhoto}/>*/}
                        <img src={u.photos.small != null ? u.photos.small : UU} className={classes.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Follow</button> :
                            <button onClick={() => {
                                this.props.follow(u.id)
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
}
export default Users;