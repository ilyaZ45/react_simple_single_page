import classes from "./Post.module.css";


const Post = (props) => {
    // debugger;

    return (
        <div className={classes.content}>
            <div className={classes.post}>
                <ul>
                    <li><img src={props.image}/></li>
                    <li>{props.message}</li>
                    <li>likes {props.likesCount}</li>
                </ul>
            </div>
        </div>
    );
}
export default Post;