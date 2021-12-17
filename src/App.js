
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Dialogs from "./components/Dialogs/dialog";
import News from "./components/news/news";
import {Route} from "react-router-dom";



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
const App = (props) => {
    // console.log(props)
    // console.log({props.state.profilePage.dialogsData})
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*<Profile />*/}
                <div className='app-wrapper-content'>
                    {/*ey route du nkarum es Profile component@ erb vor qo path@ aysinqn url@ /profile - e
                    isk url@ poxvum e navbar.js-i mijic : Aysinqn es Routner@ misht hetevum en erb vor url@
                     iranc path-in hamapatasxanum e irank nkarum en iranc component@*/}

                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*verevi erku toxi gracn u nerqevi erku toxi grac@ nuynna*/}

                    <Route path='/dialogs' render={() => <Dialogs state={props.state} addMessage = {props.addMessage} />}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost ={props.addPost} />}/>
                    <Route path='/news' component={News}/>
                </div>
            </div>
    )
}
export default App
