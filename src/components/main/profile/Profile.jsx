import React from "react";
import ProfileInfoContainer from "./profileinfo/ProfileInfoContainer";


const Profile = (props) => {
    // debugger;
    return (
        <ProfileInfoContainer profile={props.profile}/>
    );
}


export default Profile;