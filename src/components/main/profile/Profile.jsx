import React from "react";
import ProfileInfoContainer from "./profileinfo/ProfileInfoContainer";
import classes from "./Profile.module.css";


const Profile = (props) => {
    // debugger;
    return (
        <ProfileInfoContainer profile={props.profile} />
    );
}


export default Profile;