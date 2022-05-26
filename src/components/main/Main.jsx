
import classes from "./Main.module.css";
import Post from "./post/Post"
// classes = {
//     'main': 'Main_main__XP8cg ul',
// }

const Main = () => {
    return(
        <main className={classes.main}>
            <div>
                <img src="https://w-dog.ru/wallpapers/1/21/494513120428084/oblaka-gory-derevya-reka-doroga.jpg" alt=""/>
            </div>
            <Post message='i changed message' image = 'https://w-dog.ru/wallpapers/2/95/532579308403728/nebo-bavarskie-alpy-gory-oblaka-pejzazh-palmy-pastbishhe.jpg' />
            <Post message='For every posts' image = 'https://www.sunhome.ru/i/wallpapers/138/belii-zamok.orig.jpg' />
      </main>
    );
  }
  export default Main;