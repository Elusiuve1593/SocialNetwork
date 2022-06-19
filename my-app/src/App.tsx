import './App.css';
import './Components/Header/Header.module.css';
import './Components/Content/Content.module.css';
import './Components/Navbar/Navbar.module.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ContentContainer} from "./Components/Content/ContentContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route path='/content/:userId?' render={() => <ContentContainer/>}/>
                        <Route path='/dialogs/'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/users/' render={() => <UsersContainer/>}/>
                        <Route path='/login/' render={() => <Login/>}/>
                        {/*<Route path='/news/' render={() => <News/>}/>*/}
                        {/*<Route path='/music/' render={() => <Music/>}/>*/}
                        {/*<Route path='/settings/' render={() => <Settings/>}/>*/}
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;