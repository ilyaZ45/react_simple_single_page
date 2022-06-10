import classes from "./ProfileInfo.module.css";
import React from "react";
import {addPostActionCreator, postUpdateActionCreator} from "../../../../redux/store";
import Post from "../post/Post";


const ProfileInfo = (props) => {
    // debugger;
    let postsEl = props.profilePage.postsData.map(
        post => <Post key={post.id}  message={post.message} image={post.image} likesCount={post.likesCount} />
    );
    let newPostsElement = React.useRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {  //отвеч за обновление страницы с постами и добавлении
        let text = newPostsElement.current.value;
        document.querySelector('button').addEventListener("click", function () {
            props.updateNewPost(text);
        })
    }

    return (
        <div className={classes.content}>
            <div className={classes.prof}>
                <img src="https://w-dog.ru/wallpapers/1/21/494513120428084/oblaka-gory-derevya-reka-doroga.jpg" alt=""/>
            </div>

            <div >
                <div>
                    <textarea
                        ref={newPostsElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button  onClick={addPost}>Add post</button>
                </div>
            </div>
             <div className="just">
                <div><h3>My Posts</h3></div>
                {postsEl}
                <div>
                    ava + description
                </div>
            </div>
        </div>
    );
}


export default ProfileInfo;