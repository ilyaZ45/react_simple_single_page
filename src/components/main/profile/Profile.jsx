import classes from "./Profile.module.css";
import Post from "./profileinfo/post/Post";
import ProfileInfo from "./profileinfo/ProfileInfo";
import React from "react";
import ProfileInfoContainer from "./profileinfo/ProfileInfoContainer";


const Profile = (props) => {
    // debugger;
    return (
        <ProfileInfoContainer
            dispatch={props.dispatch}
            newPostText={props.newPostText}
            postsData={props.state.postsData}
        />
    );
}


export default Profile;