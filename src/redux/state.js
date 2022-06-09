const ADD_POST = 'ADD-POST';
const UDDATE_NEW_POST = 'UDDATE-NEW-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
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
        if (action.type === ADD_POST) {
            // debugger;
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                image: "https://w-dog.ru/wallpapers/2/95/532579308403728/nebo-bavarskie-alpy-gory-oblaka-pejzazh-palmy-pastbishhe.jpg",
                likesCount: 0,
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this.rerenderEntireTree(this._state);
        } else if (action.type === UDDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText;
            // this.rerenderEntireTree(this._state);  //не работает из-за неё
        } else if (action.type === ADD_MESSAGE) {
            debugger;
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageBody,
            }
            this._state.dialogsPage.messageData.push(newMessage);
            this._state.dialogsPage.newMessageBody = '';
            this.rerenderEntireTree(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessageBody = action.body;
            // this.rerenderEntireTree(this._state);
        }
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


