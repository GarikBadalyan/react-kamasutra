import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer, // <= es object@ mer state-n e yuraqanchyur@ iran verabervox masn e veradarcnum
    dialogsPage: dialogsReducer,  // mi xosqov stex sarqum enq state-@ isk nerqevum store-@
    sidebar: sidebarReducer,
    usersPage:usersReducer
})
// console.log("reducers=?", reducers)

let store = createStore(reducers) // stex sarqum enq store-@

window.store = store;

console.log("store ==== 12345", store)
// console.log("store.subscribe",store.subscribe)
console.log("store.getState() ===1", store.getState())

export default store