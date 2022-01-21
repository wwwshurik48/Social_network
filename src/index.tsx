import React from 'react';
import './index.css';
import reportWebVitals from "./reportWebVitals";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {AppStateType} from "./Redux/redux-store";

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

// const rerenderEntireTree = () => {
//         rerenderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



