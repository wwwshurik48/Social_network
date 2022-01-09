import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {propsStateType, ActionsTypes} from "./Redux/State";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import StoreContext from "./StoreContext";


export type propsStateForApp = {
    stateApp: propsStateType
    dispatch: (action: ActionsTypes) => void

    // addPost: (postText: string) => void
    // updateNewPostText: (newText: string) => void
}

function App(props: propsStateForApp) {

    return (

        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrappe-content'>
                    <Routes>
                        <Route path={'/profile'} element={<Profile stateApp={props.stateApp} dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer stateApp={props.stateApp} dispatch={props.dispatch}/>}/>
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

//
//
// export type propsStateForApp = {
//     stateApp: propsStateType
//     dispatch: (action: ActionsTypes) => void
//     // addPost: (postText: string) => void
//     // updateNewPostText: (newText: string) => void
// }
//
// function App(props: propsStateForApp) {
//
//     return (
//
//         <BrowserRouter>
//             <div className="app-wrapper">
//                 <Header/>
//                 <Navbar/>
//                 <div className='app-wrappe-content'>
//                     <Routes>
//                         <Route path={'/profile'} element={<Profile postData={props.stateApp.profilePage} callBackAddPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
//                         <Route path='/dialogs/*'
//                                element={<Dialogs messagesData={props.stateApp} dialogsData={props.stateApp}/>}/>
//                         <Route path='/news' element={<News/>}/>
//                         <Route path='/news' element={<News/>}/>
//                         <Route path='/music' element={<Music/>}/>
//                         <Route path='/settings' element={<Settings/>}/>
//                     </Routes>
//                 </div>
//             </div>
//         </BrowserRouter>
//     );
// }



// return (
//
//         <BrowserRouter>
//             <div className="app-wrapper">
//                 <Header/>
//                 <Navbar/>
//                 <div className='app-wrappe-content'>
//                     <Routes>
//                         <Route path={'/profile'} element={<Profile postData={props.stateApp.profilePage}  dispatch={props.dispatch} updateNewPostText={props.updateNewPostText}/>}/>
//                         <Route path='/dialogs/*'
//                                element={<Dialogs messagesData={props.stateApp} dialogsData={props.stateApp} dispatch={props.dispatch}/>}/>
//                         <Route path='/news' element={<News/>}/>
//                         <Route path='/news' element={<News/>}/>
//                         <Route path='/music' element={<Music/>}/>
//                         <Route path='/settings' element={<Settings/>}/>
//                     </Routes>
//                 </div>
//             </div>
//         </BrowserRouter>
//     );
