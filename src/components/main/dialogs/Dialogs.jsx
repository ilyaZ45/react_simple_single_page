import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}
const Dialogs = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <Dialog name='Alex' id='1'></Dialog>
                <Dialog name='Gregory' id='2'></Dialog>
                <Dialog name='Sam' id='3'></Dialog>
                <Dialog name='Nick' id='4'></Dialog>
                <Dialog name='Coba' id='5'></Dialog>
                <Dialog name='Rocket' id='6'></Dialog>
            </div>
            <div className={classes.messages}>
                <Message message='Hi'></Message>
                <Message message='Here'></Message>
                <Message message='Is'></Message>
                <Message message='I'></Message>
                <Message message='To'></Message>
                <Message message='Know'></Message>
            </div>
        </div>
    );
}
export default Dialogs;