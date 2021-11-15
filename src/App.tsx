import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {propsStateType} from "./Redux/State";


export type propsStateForApp = {
    stateApp: propsStateType
    addPost: (postText: string) => void
}

function App(props: propsStateForApp) {

    return (

        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrappe-content'>
                    <Routes>
                        <Route path={'/profile'} element={<Profile postData={props.stateApp} callBackAddPost={props.addPost}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs messagesData={props.stateApp} dialogsData={props.stateApp}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
