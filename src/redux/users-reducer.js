const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://avatars.mds.yandex.net/i?id=09e9c64ec63ae8045232ebc97b23226b-5163423-images-thumbs&n=13',
        //     followed: true,
        //     fullName: "Dmitry",
        //     status: "I am a Boss",
        //     location: {country: 'Belarus', city: 'Minsk'}
        // },
        // {
        //     id: 2,
        //        photoUrl: '',
        //     followed: true,
        //     fullName: "Dmitry",
        //     status: "I am a Bon",
        //     location: {country: 'Russia', city: 'Moscow'}
        // },
        // {
        //     id: 3,
        //     followed: false,
        //        photoUrl: '',
        //     fullName: "Dmitry",
        //     status: "I am a miniBoss",
        //     location: {country: 'Ukraine', city: 'Kiev'}
        // },
        // {
        //     id: 4,
        //     followed: true,
        //        photoUrl: '',
        //     fullName: "Dmitry",
        //     status: "I am a Vasyz",
        //     location: {country: 'Polska', city: 'Warshaw'}
        // },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;