import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialogs-reducer";
import SidebarReducer from "./Sidebar-reducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sideBar: SidebarReducer
});

type RootReducersType = typeof reducers
export type stateType = ReturnType<RootReducersType>


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
