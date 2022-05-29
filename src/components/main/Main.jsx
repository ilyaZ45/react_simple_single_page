import classes from "./Main.module.css";
import Profile from "./profile/Profile";
import Dialogs from "./dialogs/Dialogs";
import News from "./news/News";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";
// classes = {
//     'main': 'Main_main__XP8cg ul',
// }

const Main = () => {
    return (
            <main className='main'>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/profile"/>}></Route>
                    <Route path="/dialogs" element={<Dialogs />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/news" element={<News />}></Route>

                    {/*<Route path="/news" element={<News />}></Route>*/}
                </Routes>

            </main>

    );
}
export default Main;