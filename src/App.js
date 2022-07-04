import React from "react";
import classes from './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import {BrowserRouter, Navigate, Route, Routes, useParams} from "react-router-dom";
import Dialogs from "./components/main/dialogs/Dialogs";
import DialogsContainer from "./components/main/dialogs/DialogsContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import ProfileContainer from "./components/main/profile/ProfileContainer";
import UsersContainer from "./components/main/users/UsersContainer";
import News from "./components/main/news/News";
import NavContainer from "./components/nav/Nav";
import Login from "./components/login/Login";
import NewsContainer from "./components/main/news/News";

const App = (props) => {
    // debugger;
    const {id} = useParams();
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Navigate replace to="/profile"/>}/>
                <Route path="/dialogs" element={<DialogsContainer/>}/>
                <Route path="/profile" element={<ProfileContainer
                />}/>
                <Route path="/profile/:id" element={<ProfileContainer/>}/>
                <Route path="/users" element={<UsersContainer
                />}/>
                <Route path="/news" element={<NewsContainer/>}/>

            </Routes>
            <NavContainer/>
            <Footer/>
        </div>

    );
}

export default App;
