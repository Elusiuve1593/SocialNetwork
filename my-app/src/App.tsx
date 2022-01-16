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
import {addNewPostTypeMessage, addPostType, messagesDataType, stateRootType} from "./Components/Redax/redax";

type AppPropsType = {
    state: stateRootType
    dispatch: (action: addPostType | addNewPostTypeMessage) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/content/*' element={<Content
                            content={props.state.contentPage}
                            dispatch={props.dispatch}
                        />}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs dialogs={props.state.dialogsPage.dialogsData}
                                                 message={props.state.dialogsPage.messageData}
                                                 dispatch={props.dispatch}/>}/>
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
