import React from 'react';
import './index.css';
import ReactDom from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPost} from './redux/state';
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

let rerenderEntireTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
        </BrowserRouter>
    );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
reportWebVitals();
