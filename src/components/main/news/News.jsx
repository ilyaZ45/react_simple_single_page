
import React from "react";
import Post from "../profile/profileinfo/post/Post";
import classes from "./News.module.css";
import {NavLink} from "react-router-dom";

const NewsContainer = () => {
 return(
    <div className={classes.content}>
        <div>
        <img src="https://w-dog.ru/wallpapers/1/21/494513120428084/oblaka-gory-derevya-reka-doroga.jpg" alt=""/>
        </div>
            <Post message='I can changed message'
              image='https://w-dog.ru/wallpapers/2/95/532579308403728/nebo-bavarskie-alpy-gory-oblaka-pejzazh-palmy-pastbishhe.jpg'/>
        <Post message='For every posts' image='https://www.sunhome.ru/i/wallpapers/138/belii-zamok.orig.jpg'/>
    </div>
 );
}
export default NewsContainer;