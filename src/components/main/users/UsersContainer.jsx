import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../../redux/users-reducer";

let mapStateToProps = (state) => {
    // debugger;
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
                   dispatch(followAC(userId));
        },
        unfollow: (userId) => {
                   dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
                   dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}
let UsersContainer = connect(mapStateToProps,
    mapDispatchToProps)(Users);
export default UsersContainer;