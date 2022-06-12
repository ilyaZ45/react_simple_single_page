import classes from "./Dialogs.module.css";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import React from "react";

const Dialogs = (props) => {
    // debugger;

    let dialogsEl = props.dialogsPage.dialogsData.map(
        d => <Dialog key={d.id}  name={d.name}  />
    );
    let messageEl = props.dialogsPage.messageData.map(
        mes => <Message key={mes.id} message={mes.message} />
    );

    let newMessageElement = React.createRef();
    let addMessage = () =>{
        props.addMessage();
    }
    let onPostChange = () => {  //отвеч за обновление страницы с постами и добавлении
        let body = newMessageElement.current.value;
        // document.querySelector('button').addEventListener("click", function () {
            props.updateNewMessage(body);
        // })
    }
    // debugger;
    return (
        <div className={classes.content}>
            <div className={classes.dialogs} >
              {dialogsEl}
            </div>
            <div className={classes.messages}>
               {messageEl}
            </div>
            <div>
                <div>
                    <textarea
                              ref={newMessageElement}
                              value={props.newMessageBody}
                              onChange={onPostChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;