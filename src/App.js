import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";


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
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
        </div>
    )
}
export default App
