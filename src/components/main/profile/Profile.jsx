import React from "react";
import ProfileInfoContainer from "./profileinfo/ProfileInfoContainer";
import classes from "./Profile.module.css";
import {Navigate} from "react-router-dom";


const Profile = (props) => {
    debugger;
    return (
        <ProfileInfoContainer profile={props.profile} />
    );
}


export default Profile;