import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, messageUpdateActionCreator} from "../../../redux/dialogs-reducer";
import ProfileInfoContainer from "../profile/profileinfo/ProfileInfoContainer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

// const DialogsContainer = (props) => {
//     let state = props.store.getState();
//
//     let addMessage = () => {
//         // debugger;
//         props.store.dispatch(addMessageActionCreator());
//     }
//     let onPostChange = (body) => {  //отвеч за обновление страницы с постами и добавлении
//         props.store.dispatch(messageUpdateActionCreator(body));
//
//     }
//     return (
//         <Dialogs updateNewMessage={onPostChange} addMessage={addMessage}
//                  messageData={state.dialogsPage.messageData}
//                  dialogsData={state.dialogsPage.dialogsData}
//         />
//     );
// }


let mapStateToProps = (state) => {
     // debugger;
    return {
    dialogsPage: state.dialogsPage,
    // newMessageBody: state.dialogsPage.newMessageBody
}
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessage: (body) => {
            dispatch(messageUpdateActionCreator(body));
        },
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// let DialogsContainer = connect(mapStateToProps,
//     mapDispatchToProps) (AuthRedirectComponent);
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);;