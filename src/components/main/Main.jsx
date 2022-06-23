
import Profile from "./profile/Profile";
import News from "./news/News";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import React from "react";
import DialogsContainer from "./dialogs/DialogsContainer";
import UsersContainer from "./users/UsersContainer";
import ProfileContainer from "./profile/ProfileContainer";
import HeaderContainer from "../header/HeaderContainer";


const Main = (props) => {
    // debugger;
    const { id } = useParams();
    return (
            <main className='main'>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/profile"/>}/>
                    <Route path="/dialogs" element={<DialogsContainer/>}
                    />
                    {/*<Route path="/login" element={<HeaderContainer/>}/>*/}
                    <Route path="/profile" element={<ProfileContainer
                    />}/>
                   <Route path="/profile/:id" element={<ProfileContainer/>}/>
                    <Route path="/users" element={<UsersContainer
                    />}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </main>

    );
}
export default Main;