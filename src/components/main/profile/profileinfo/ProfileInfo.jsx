import classes from "./ProfileInfo.module.css";
import React from "react";


const ProfileInfo = (props) => {
    let newPostsElement = React.createRef();
    let addPost = () =>{
        props.addPost();
    }
    let onPostChange = () => {  //отвеч за обновление страницы с постами и добавлении
        let text = newPostsElement.current.value;
        props.updateNewPost(text);
    }
    return (
        <div className={classes.content}>
            <div className={classes.prof}>
                <img src="https://w-dog.ru/wallpapers/1/21/494513120428084/oblaka-gory-derevya-reka-doroga.jpg" alt=""/>
            </div>

            <div>
                <div>
                    <textarea
                              ref={newPostsElement}
                              value={props.newPostText}
                              onChange={onPostChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
    );
}


export default ProfileInfo;