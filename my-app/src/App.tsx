import './App.css';
import {Header} from "./Components/Header";
import {Navbar} from "./Components/Navbar";
import {Footer} from "./Components/Footer";
import {Content} from "./Components/Content";

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
