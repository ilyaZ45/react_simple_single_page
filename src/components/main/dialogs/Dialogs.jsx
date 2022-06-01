import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import React from "react";


const Dialogs = (props) => {

    let dialogsEl = props.dialogsData.map(
        d => <Dialog key={d.id}  name={d.name}  />
    );
    let messageEl = props.messageData.map(
        mes => <Message key={mes.id} message={mes.message} />
    );
    debugger;
    return (
        <div className={classes.content}>
            <div className={classes.dialogs} >
              {dialogsEl}
            </div>
            <div className={classes.messages}>
               {messageEl}
            </div>
        </div>
    );
}
export default Dialogs;