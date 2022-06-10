const {combineReducers, createStore} = require("redux");
const profileReducer = require("./profile-reducer");
const dialogsReducer = require("./dialogs-reducer");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;