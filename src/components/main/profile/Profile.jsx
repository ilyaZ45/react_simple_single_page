import React from "react";
import ProfileInfoContainer from "./profileinfo/ProfileInfoContainer";


const Profile = (props) => {
    // debugger;
    return (
        <ProfileInfoContainer
            store={props.store}
        />
    );
}


export default Profile;