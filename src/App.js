import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Dialogs from "./components/Dialogs/dialog";
import News from "./components/news/news";
import {BrowserRouter, Route} from "react-router-dom";


// kompomemt

// function App() {
//   return (
//     <div className="App">
//       {/*<header className="App-header">*/}
//       {/*  <img src={logo} className="App-logo" alt="logo" />*/}
//       {/*  <p>*/}
//       {/*   Papa Edit <code>src/App.js</code> and save to reload.*/}
//       {/*  </p>*/}
//       {/*  <a*/}
//       {/*    className="App-link"*/}
//       {/*    href="https://reactjs.org"*/}
//       {/*    target="_blank"*/}
//       {/*    rel="noopener noreferrer"*/}
//       {/*  >*/}
//       {/*    Learn React*/}
//       {/*  </a>*/}
//       {/*</header>*/}
//         <h1>AAAAAAAAA</h1>
//         <Welcom />
//         <div>p</div>
//     </div>
//   );
// }
//
// function App() {
//     return (
//         <div>
//             <h1>AAAAAAAAAAAAAAAAAAAA</h1>
//             <Header />
//             <Texnologies />
//         </div>
//     )
// }
//
// const Welcome = () => {
//     return (
//         <h1>BBBBBBBBBBB</h1>
//     )
// }

// 11 das

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*<Profile />*/}
                <div className='app-wrapper-content'>
                    {/*ey route du nkarum es Profile component@ erb vor qo path@ aysinqn url@ /profile - e
                    isk url@ poxvum e navbar.js-i mijic : Aysinqn es Routner@ misht hetevum en erb vor url@
                     iranc path-in hamapatasxanum e irank nkarum en iranc component@*/}
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App
