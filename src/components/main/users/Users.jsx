import React from "react";
import classes from  "./Users.module.css";
import UU from "../../../assets/images/UU.png";
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
                // .then(response => response.json())
                // .then(data => console.log(data));
    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount /this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            if (i <= 10) {
                pages.push(i);
            }
        }
        return <div>
            <div>
                {pages.map((p,index) => (
                    <span key={index} className={this.props.currentPage===p ? classes.selectedPage : ''}
                    onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                ))}
            </div>
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