const ADD_POST = 'ADD-POST';
const UDDATE_NEW_POST = 'UDDATE-NEW-POST';

let initialState = {
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
        }

const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST:
            // debugger;

            let newPost = {
                id: 5,
                message: state.newPostText,
                image: "https://w-dog.ru/wallpapers/2/95/532579308403728/nebo-bavarskie-alpy-gory-oblaka-pejzazh-palmy-pastbishhe.jpg",
                likesCount: 0,
            }
            let stateCopy = {...state};
            stateCopy.postsData=[...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UDDATE_NEW_POST: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
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
export default profileReducer;