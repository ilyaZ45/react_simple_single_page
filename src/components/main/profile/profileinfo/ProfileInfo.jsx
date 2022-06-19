import classes from "./ProfileInfo.module.css";
import React from "react";
import Post from "./post/Post";


const ProfileInfo = (props) => {
    let postsEl = props.postsData.map(
        post => <Post key={post.id} message={post.message} image={post.image} likesCount={post.likesCount}/>
    );
    let newPostsElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {  //отвеч за обновление страницы с постами и добавлении
        let text = newPostsElement.current.value;
        props.updateNewPost(text);
        // })
    }
    // debugger;
    if (!props.profile) {
        return <h1> Wait </h1>
    }
    // debugger;
    return (
        <div className={classes.content}>
            <div className={classes.prof}>
                <div>
                    <img src="https://w-dog.ru/wallpapers/1/21/494513120428084/oblaka-gory-derevya-reka-doroga.jpg" alt=""/>
                </div>
                <div>
                    <textarea
                        ref={newPostsElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
            </div>


            <div className="just">
                <div><h3>My Posts</h3></div>
                {postsEl}
                <div>
                    <img src={props.profile.photos.large}/>
                    <h4>{props.profile.fullName}</h4>
                    <h4>{props.profile.aboutMe}</h4>
                    ava + description
                </div>
            </div>
        </div>
    );
}


export default ProfileInfo;