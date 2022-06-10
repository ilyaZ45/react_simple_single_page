import classes from "./Dialogs.module.css";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import React from "react";
import {addMessageActionCreator, messageUpdateActionCreator} from "../../../redux/store";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        // debugger;
        props.store.dispatch(addMessageActionCreator());
    }
    let onPostChange = (body) => {  //отвеч за обновление страницы с постами и добавлении
        props.store.dispatch(messageUpdateActionCreator(body));

    }
    return (
        <Dialogs updateNewMessage={onPostChange} addMessage={addMessage}
                 messageData={state.dialogsPage.messageData}
                 dialogsData={state.dialogsPage.dialogsData}
        />
    );
}
export default DialogsContainer;