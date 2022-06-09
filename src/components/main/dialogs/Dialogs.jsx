import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import React from "react";
import {addMessageActionCreator, messageUpdateActionCreator} from "../../../redux/state";



const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsEl = state.dialogsData.map(
        d => <Dialog key={d.id}  name={d.name}  />
    );
    let messageEl = state.messageData.map(
        mes => <Message key={mes.id} message={mes.message} />
    );

    let newMessageElement = React.createRef();
    let addMessage = () =>{
        debugger;
        props.dispatch(addMessageActionCreator());
    }
    let onPostChange = () => {  //отвеч за обновление страницы с постами и добавлении
        let body = newMessageElement.current.value;
        let action = messageUpdateActionCreator(body);
        props.dispatch(action);
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