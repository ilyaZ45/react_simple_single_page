import React from "react";
import {addPostActionCreator, postUpdateActionCreator} from "../../../../redux/store";
import ProfileInfo from "./ProfileInfo";


const ProfileInfoContainer = (props) => {
    // debugger;
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChanged = (text) => {  //отвеч за обновление страницы с постами и добавлении
        let action = postUpdateActionCreator(text);
        props.store.dispatch(action);

    }

    return (
        <ProfileInfo updateNewPost={onPostChanged} addPost={addPost}
                     messageData={state.dialogsPage.messageData}
        />
    );
}


export default ProfileInfoContainer;