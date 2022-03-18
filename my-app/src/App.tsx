import './App.css';
import './Components/Header/Header.module.css';
import './Components/Content/Content.module.css';
import './Components/Navbar/Navbar.module.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ContentContainer} from "./Components/Content/ContentContainer";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import {HeaderContainer} from "./Components/Header/HeaderContainer";

function App(props: any) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route path='/content/:userId?' render={() => <ContentContainer/>}/>
                        <Route path='/dialogs/'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/users/' render={() => <UsersContainer/>}/>
                        <Route path='/news/' render={() => <News/>}/>
                        <Route path='/music/' render={() => <Music/>}/>
                        <Route path='/settings/' render={() => <Settings/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;