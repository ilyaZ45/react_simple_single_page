const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    userId: null,
    email: null,
    login: null,
    photo: "https://www.sunhome.ru/i/wallpapers/138/belii-zamok.orig.jpg",
    isAuth: false

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserData = (userId,email, login, photo) => ({type: SET_USER_DATA, data: {userId,email,login, photo}});
export default authReducer;