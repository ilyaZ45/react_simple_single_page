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
    },

},
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
    console.log('Hi');
    },
    addPost() {
    debugger;
    let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
    }
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText='';
    this.rerenderEntireTree(this._state);
    },
    updateNewPost(newText)  {
    this._state.profilePage.newPostText = newText;
    // rerenderEntireTree(state);  //не работает из-за неё
},
    subscribe(observer) {
    this.rerenderEntireTree = observer;  //патерн
},

}

export default store;
window.store = store;  // для обращения глобально


