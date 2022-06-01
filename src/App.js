import React from "react";
import classes from './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dialogs from "./components/main/dialogs/Dialogs";

const App = (props) => {
    // debugger;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <Main dialogsData={props.dialogsData} messageData={props.messageData} postsData={props.postsData}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
