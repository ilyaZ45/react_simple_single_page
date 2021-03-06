const ADD_POST = 'ADD-POST';
const UDDATE_NEW_POST = 'UDDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    profile: null,  //опред изнач состояние профайла,

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            // debugger;
            let newPost = {
                id: 5,
                message: state.newPostText,
                image: "https://w-dog.ru/wallpapers/2/95/532579308403728/nebo-bavarskie-alpy-gory-oblaka-pejzazh-palmy-pastbishhe.jpg",
                likesCount: 0,
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }
        case UDDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {   //пишем саму логику
            return {
                ...state,
                profile: action.profile,
            }
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
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export default profileReducer;