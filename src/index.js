import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from 'react-dom/client';

// let container = null;
// let rerenderEntireTree = (state) => {
//     document.addEventListener('DOMContentLoaded', function (event) {
//         if (!container) {
//             container = document.getElementById('root');
//             const root = ReactDOM.createRoot(container);
//             root.render(
//                 <BrowserRouter>
//                     <React.StrictMode>
//                     <App state={state}
//                      dispatch={store.dispatch.bind(store)}  // bind-кому принадлежит метод
//                 />
//                     </React.StrictMode>
//                 </BrowserRouter>
//             );
//         }
//     })
// };
let rerenderEntireTree = (state) => {
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}  // bind-кому принадлежит метод
                     store={store}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();
