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
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <Main state={props.state} dispatch={props.dispatch} store={props.store} />
                <Footer/>
            </div>
    );
}

export default App;
