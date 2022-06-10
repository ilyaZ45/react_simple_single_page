import classes from "./Main.module.css";
import Profile from "./profile/Profile";
import Dialogs from "./dialogs/Dialogs";
import News from "./news/News";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import DialogsContainer from "./dialogs/DialogsContainer";

// classes = {
//     'main': 'Main_main__XP8cg ul',
// }

const Main = (props) => {
    // debugger;
    return (
            <main className='main'>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/profile"/>}/>
                    <Route path="/dialogs" element={<DialogsContainer
                        store={props.store}
                    />}
                    />
                    <Route path="/profile" element={<Profile
                        store={props.store}
                    />} />
                    <Route path="/news" element={<News />}/>
                </Routes>

            </main>

    );
}
export default Main;