import {connect} from "react-redux";
import {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount} from "../../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import {usersAPI} from "../../../api/api";




class UsersContainer extends React.Component {
    componentDidMount() {
            usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                });
    }
    onPageChanged = (pageNumber) =>{
                this.props.setCurrentPage(pageNumber);
                usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                    this.props.setUsers(data.items);
                });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}
let mapStateToProps = (state) => {
    // debugger;
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//                    dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//                    dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//                    dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         }
//     }
// }
export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount})(UsersContainer);