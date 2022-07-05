import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {addPostActionCreator, postUpdateActionCreator} from "../../../../redux/profile-reducer";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

// const ProfileInfoContainer = (props) => {
//     // debugger;
//     let state = props.store.getState();
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//     let onPostChanged = (text) => {  //отвеч за обновление страницы с постами и добавлении
//         let action = postUpdateActionCreator(text);
//         props.store.dispatch(action);
//
//     }
//
//     return (
//         <ProfileInfo updateNewPost={onPostChanged} addPost={addPost}
//                      messageData={state.dialogsPage.messageData}
//         />
//     );
// }


let mapStateToProps = (state) => {
    // debugger;
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileInfo);
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (body) => {
            let action = postUpdateActionCreator(body);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
}
// let ProfileInfoContainer = connect(mapStateToProps,
//     mapDispatchToProps)(AuthRedirectComponent);
export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(ProfileInfo);;