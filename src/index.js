import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Gregory"},
    {id: 3, name: "Sam"},
    {id: 4, name: "Nick"},
    {id: 5, name: "Coba"},
    {id: 6, name: "Rocket"},
]
let messageData = [
    {id:1,message: "Hi"},
    {id:2,message: "Here"},
    {id:3,message: "Is"},
    {id:4,message: "I"},
    {id:5,message: "To"},
    {id:6,message: "Know"},

]
let postsData = [
                    {id:0, message:"I can changed message", image:"https://w-dog.ru/wallpapers/2/95/532579308403728/nebo-bavarskie-alpy-gory-oblaka-pejzazh-palmy-pastbishhe.jpg",likesCount:12},
                    {id:1, message:"For every posts", image:"https://www.sunhome.ru/i/wallpapers/138/belii-zamok.orig.jpg", likesCount:14},

                ]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData}  postsData={postsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
