const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

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
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
            case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export default usersReducer;