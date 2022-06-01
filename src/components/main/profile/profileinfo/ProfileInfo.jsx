import classes from "./ProfileInfo.module.css";
import React from "react";


const ProfileInfo = (props) => {
    return (
        <div className={classes.content}>
        <div className={classes.prof}>
            <img src="https://w-dog.ru/wallpapers/1/21/494513120428084/oblaka-gory-derevya-reka-doroga.jpg" alt=""/>
        </div>

        <div>
            <div>
                <textarea name="" id="" cols="15" rows="10"></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        </div>
    );
}


export default ProfileInfo;