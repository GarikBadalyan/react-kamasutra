
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import News from "./components/news/news";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";



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
    // console.log(props)
    // console.log({props.state.profilePage.dialogsData})
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/news' component={News}/>
                </div>
            </div>
    )
}
export default App

