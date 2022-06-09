const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            // debugger;
            let newMessage = {
                id: 7,
                message: state.newMessageBody,
            }
            state.messageData.push(newMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}
export default dialogsReducer;