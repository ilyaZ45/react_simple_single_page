
import Profile from "./profile/Profile";
import News from "./news/News";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import DialogsContainer from "./dialogs/DialogsContainer";
import UsersContainer from "./users/UsersContainer";

const Main = (props) => {
    // debugger;
    return (
            <main className='main'>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/profile"/>}/>
                    <Route path="/dialogs" element={<DialogsContainer
                    />}
                    />
                    <Route path="/profile" element={<Profile
                    />}/>
                    <Route path="/users" element={<UsersContainer
                    />}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </main>

    );
}
export default Main;