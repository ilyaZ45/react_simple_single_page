let rerenderEntireTree = () => {
    console.log('Hi');
}

let state = {
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

}

window.state = state;

export const addPost = () => {
    debugger;
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}

export const updateNewPost = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;  //патерн
}
export default state;

