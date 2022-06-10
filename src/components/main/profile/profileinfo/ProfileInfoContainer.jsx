import React from "react";
import {addPostActionCreator, postUpdateActionCreator} from "../../../../redux/store";
import ProfileInfo from "./ProfileInfo";


const ProfileInfoContainer = (props) => {
    // debugger;
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChanged = (text) => {  //отвеч за обновление страницы с постами и добавлении
        let action = postUpdateActionCreator(text);
        props.dispatch(action);

    }

    return (
        <ProfileInfo updateNewPost={onPostChanged} addPost={addPost}  postsData={props.postsData} />
    );
}


export default ProfileInfoContainer;