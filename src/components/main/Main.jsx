import classes from "./Main.module.css";
import Profile from "./profile/Profile";
import Dialogs from "./dialogs/Dialogs";
import News from "./news/News";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";
// classes = {
//     'main': 'Main_main__XP8cg ul',
// }

const Main = (props) => {
     // debugger;
    return (
            <main className='main'>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/profile"/>}/>
                    <Route path="/dialogs" element={<Dialogs
                        state={props.state.dialogsPage} />}/>
                    <Route path="/profile" element={<Profile
                        state={props.state.profilePage}
                        addPost={props.addPost}/>} />
                    <Route path="/news" element={<News />}/>
                </Routes>

            </main>

    );
}
export default Main;