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
import {dialogsDataType, messageDataType, messagesDataType} from './index'

type dialogsDataTypeApp = {
    dialogsData: dialogsDataType[]
    messageData: messageDataType[]
    messages: messagesDataType[]
}

function App(props: dialogsDataTypeApp) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/content/*' element={<Content messages={props.messages}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
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
