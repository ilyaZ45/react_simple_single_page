import React from 'react';
import './index.css';
import ReactDom from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPost} from './redux/state';
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { createRoot } from 'react-dom/client';

// let container = null;
// let rerenderEntireTree = () => {
//     document.addEventListener('DOMContentLoaded', function (event) {
//         if (!container) {
//             container = document.getElementById('root');
//             const root = ReactDOM.createRoot(container);
//             root.render(
//                 <BrowserRouter>
//                     <React.StrictMode>
//                     <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
//                     </React.StrictMode>
//                 </BrowserRouter>
//             );
//         }
//     })
// };
let rerenderEntireTree = () => {
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
            </React.StrictMode>
        </BrowserRouter>
    );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
reportWebVitals();
