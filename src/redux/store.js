import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_POST = 'ADD-POST';
const UDDATE_NEW_POST = 'UDDATE-NEW-POST';
let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 0,
                    message: "I can changed message",
                    image: "https://w-dog.ru/wallpapers/2/95/532579308403728/nebo-bavarskie-alpy-gory-oblaka-pejzazh-palmy-pastbishhe.jpg",
                    likesCount: 12
                },
                {
                    id: 1,
                    message: "For every posts",
                    image: "https://www.sunhome.ru/i/wallpapers/138/belii-zamok.orig.jpg",
                    likesCount: 14
                },

            ],
            newPostText: 'Good Morning',
        },
        dialogsPage: {
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
        },

    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('Hi');
    },
    dispatch(action) { // у объекта action есть метод type
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this.rerenderEntireTree(this._state);
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;  //патерн
    },

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}
export const postUpdateActionCreator = (text) => {
    return {
        type: UDDATE_NEW_POST, newText: text,
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
export default store;
window.store = store;  // для обращения глобально


