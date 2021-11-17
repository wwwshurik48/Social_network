import React from 'react';
import state, {subscriber} from "./Redux/State";
import './index.css';
import reportWebVitals from "./reportWebVitals";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, propsStateType} from './Redux/State'

const renderTree = (state:propsStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App stateApp={state}
                 addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderTree(state)
subscriber(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



