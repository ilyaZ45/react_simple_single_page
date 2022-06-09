const ADD_POST = 'ADD-POST';
const UDDATE_NEW_POST = 'UDDATE-NEW-POST';

const profileReducer = (state,action) => {
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