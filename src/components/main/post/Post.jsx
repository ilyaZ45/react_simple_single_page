
import classes from "./Post.module.css";


const Post = (props) => {
    // debugger;
    return(
        <div className={classes.post}>
            <ul>
                <li><img src={props.image}/></li>
                <li>{props.message}</li>
            </ul>
        </div>
    );
  }
  export default Post;