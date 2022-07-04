import React from 'react';
import Profile from "./profile/Profile";
import News from "./news/News";
import {Navigate, Route, Router, Routes, useParams} from "react-router-dom";
// import React from "react";
import DialogsContainer from "./dialogs/DialogsContainer";
import UsersContainer from "./users/UsersContainer";
import ProfileContainer from "./profile/ProfileContainer";


const MainContainer = (props) => {
    return (
        <main>
            {/*<DialogsContainer />*/}
            {/*<ProfileContainer />*/}
            {/*<UsersContainer />*/}
            {/*<News />*/}
        </main>

    );

}
export default MainContainer;