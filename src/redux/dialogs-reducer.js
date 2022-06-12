const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
let initialState = {
            dialogsData: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Gregory"},
                {id: 3, name: "Sam"},
                {id: 4, name: "Nick"},
                {id: 5, name: "Coba"},
                {id: 6, name: "Rocket"},
            ],
            messageData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Here"},
                {id: 3, message: "Is"},
                {id: 4, message: "I"},
                {id: 5, message: "To"},
                {id: 6, message: "Know"},

            ],
            newMessageBody: "hi",
        }
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            // debugger;
            let newMessage = {
                id: 7,
                message: state.newMessageBody,
            }
            let stateCopy = {...state};
            stateCopy.messageData = [...state.messageData];
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageBody = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        default:
            return state;
        }

}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}
export const messageUpdateActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE, body: body,
    }
}
export default dialogsReducer;