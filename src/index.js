
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./render";
import state from "./redux/state";

console.log("state =",state)
console.log('222')
rerenderEntireTree(state)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
