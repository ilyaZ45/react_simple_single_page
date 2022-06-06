import classes from "./Profile.module.css";
import Post from "./post/Post";
import ProfileInfo from "./profileinfo/ProfileInfo";
import React from "react";


const Profile = (props) => {
    let postsEl = props.state.postsData.map(
        post => <Post key={post.id}  message={post.message} image={post.image} likesCount={post.likesCount} />
    );
    return (
        <div className={classes.content}>
            <ProfileInfo dispatch={props.dispatch}
                         newPostText={props.newPostText}
                         />
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


export default Profile;