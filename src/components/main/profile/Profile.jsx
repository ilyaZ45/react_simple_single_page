import classes from "./Profile.module.css";
import Post from "./post/Post";


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div className='prof'>
                <img src="https://w-dog.ru/wallpapers/1/21/494513120428084/oblaka-gory-derevya-reka-doroga.jpg" alt=""/>
            </div>
            <div className="just">
                <Post message='I can changed message'
                      image='https://w-dog.ru/wallpapers/2/95/532579308403728/nebo-bavarskie-alpy-gory-oblaka-pejzazh-palmy-pastbishhe.jpg'/>
                <Post message='For every posts' image='https://www.sunhome.ru/i/wallpapers/138/belii-zamok.orig.jpg'/>
                <div>
                    ava + description
                </div>
            </div>
            {/*<Post message='I can changed message'/>*/}
        </div>
    );
}


export default Profile;