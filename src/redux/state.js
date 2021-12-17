import {rerenderEntireTree} from "../render";
import uxxaki111 from "../uxxaki";

console.log(uxxaki111)
let state = {
    profilePage: {
        postData: [
            {id: "1", messages: "How tu you111'", likeCount: "000"},
            {id: "2", messages: "what is your name222", likeCount: "10"},
            {id: "3", messages: "Inche qo anun@", likeCount: "20"},
            {id: "4", messages: "AAAAAAAAAAAAAA", likeCount: "30"},
            {id: "5", name: "like5555 ", age: "AAA34"},
            {id: "6", anun: "Garik", azganun: "Badalyan"},
        ],
        dialogsData: [
            {name: "Narek333666", id: "111",},
            {name: "Mari", id: "222"},
            {name: "Karen", id: "333"},
            {name: "Anahit", id: "444"},
            {name: "Armen", id: "555"},
        ],
    },
    dialogsPage: {
        messages: [
            {id: "1", message: "hiiii"},
            {id: "2", message: "How are you"},
            {id: "3", message: "What is your name"},
            {id: "4", message: "AAAAAAAABBBBB"},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: "5",
        messages:postMessage,
        likeCount:"0"
    }
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)
};

console.log('333')
export default state;