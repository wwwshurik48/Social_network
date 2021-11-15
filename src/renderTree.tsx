import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, propsStateType} from './Redux/State'

export const renderTree = (state:propsStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App stateApp={state}
                 addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

