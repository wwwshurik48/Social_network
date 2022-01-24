import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrappe-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path='/dialogs/*'
                           element={<DialogsContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;

// function App(props: propsStateForApp) {
//
//     return (
//         <div className="app-wrapper">
//             <Header/>
//             <Navbar/>
//             <div className='app-wrappe-content'>
//                 <Routes>
//                     <Route path={'/profile'} element={<Profile stateApp={props.stateApp} dispatch={props.dispatch}/>}/>
//                     <Route path='/dialogs/*'
//                            element={<DialogsContainer stateApp={props.stateApp} dispatch={props.dispatch}/>}/>
//                     <Route path='/news' element={<News/>}/>
//                     <Route path='/news' element={<News/>}/>
//                     <Route path='/music' element={<Music/>}/>
//                     <Route path='/settings' element={<Settings/>}/>
//                 </Routes>
//             </div>
//         </div>
//     );
// }
//
// export default App;


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
