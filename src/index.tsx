import React from 'react';
import './index.css';
import reportWebVitals from "./reportWebVitals";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreType} from "./Redux/State";
import store from './Redux/State'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";


const rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
            <App
                    // store={store}
                // stateApp={store.getState()}
                //  dispatch={store.dispatch.bind(store)}
                 // updateNewPostText={store.getState}
            />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store);
store.subscriber(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



