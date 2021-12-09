import './App.css';
import './Components/Header/Header.module.css';
import './Components/Content/Content.module.css';
import './Components/Navbar/Navbar.module.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Footer} from "./Components/Footer/Footer";
import {Content} from "./Components/Content/Content";

function App() {
    return (
        <div  className='app-wrapper'>
            <Header/>
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
}


export default App;
