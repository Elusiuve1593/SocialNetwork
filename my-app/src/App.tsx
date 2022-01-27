import './App.css';
import './Components/Header/Header.module.css';
import './Components/Content/Content.module.css';
import './Components/Navbar/Navbar.module.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Content} from "./Components/Content/Content";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {addNewPostTypeMessage, addPostType, messagesDataType, stateRootType, storeType} from "./Components/Redax/redax";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: stateRootType
    dispatch: (action: addPostType | addNewPostTypeMessage) => void
    store: storeType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/content/*' element={<Content store={props.store}/>}/>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
