import classes from "./Dialogs.module.css";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import React from "react";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    // debugger;

    let dialogsEl = props.dialogsPage.dialogsData.map(
        d => <Dialog key={d.id}  name={d.name}  />
    );
    let messageEl = props.dialogsPage.messageData.map(
        mes => <Message key={mes.id} message={mes.message} />
    );
    let newMessageBody = props.dialogsPage.newMessageBody;

    let addMessage = () =>{
        props.addMessage();
    }
    let onPostChange = (e) => {  //отвеч за обновление страницы с постами и добавлении
        let body = e.target.value;
        // document.querySelector('button').addEventListener("click", function () {
            props.updateNewMessage(body);
        // })
    }
    // debugger;
    if (props.isAuth === false) return <Navigate replace to={"/Login"} />;
    return (
        <div className={classes.content}>
            <div className={classes.wrap}>
            <div className={classes.dialogs} >
              {dialogsEl}
            </div>
            <div className={classes.messages}>
               {messageEl}
            </div>
            <div className={classes.block2}>
                <div>
                    <textarea
                              value={newMessageBody}
                              onChange={onPostChange}
                              placeholder="input your text"
                    ></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Dialogs;