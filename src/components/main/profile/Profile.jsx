import classes from "./Profile.module.css";
import Post from "./post/Post";
import ProfileInfo from "./profileinfo/ProfileInfo";
import React from "react";
import ProfileInfoContainer from "./profileinfo/ProfileInfoContainer";


const Profile = (props) => {

    debugger;
    return (
        <ProfileInfoContainer
            // dispatch={props.dispatch}
            newPostText={props.newPostText}
            // postsData={props.postsData}
        />
    );
}


export default Profile;