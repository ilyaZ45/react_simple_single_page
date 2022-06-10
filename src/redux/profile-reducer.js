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
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UDDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export default profileReducer;