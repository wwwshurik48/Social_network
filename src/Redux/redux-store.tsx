import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialogs-reducer";
import SidebarReducer from "./Sidebar-reducer";

export let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sideBar: SidebarReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;