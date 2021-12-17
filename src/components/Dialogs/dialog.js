import s from './dialog.module.css'
import Dialogitem from "./Dialogitem/Dialogitem";
import Messages from "./Message/Message";
import React from "react";


// let messagesData = [
//     {id : "1", message : "hiiii"},
//     {id : "2", message : "How are you"},
//     {id : "3", message : "What is your name"},
//     {id : "4", message : "AAAAAAAABBBBB"},
// ]


const Dialogs = (props) => {

    let dialogElements = props.state.profilePage.dialogsData.map((dialog) => {
        return <Dialogitem name={dialog.name} id={dialog.id}/>
    })

    let messageElement = props.state.dialogsPage.messages.map((elem) => {
        return <Messages message={elem.message}/>
    })

    let newMessageElement = React.createRef()

    let addMessage1 = () => {
        let el1 = newMessageElement.current.value
        console.log("Badalyan", el1);
        props.addMessage(el1);
        newMessageElement.current.value = '';
    }

    return (
        <div className={s.dialogs}>
            <div>
                <div className={s.dialogsItems}>
                    <div>
                        <div>
                            <textarea ref={newMessageElement} ></textarea>
                        </div>
                        <div>
                            <button onClick={ addMessage1 }>Add post</button>
                        </div>
                    </div>
                    {dialogElements}
                </div>
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}



export default Dialogs




// es ashxatuma aranc mapi parz kareli e qomentic hanel u natel

// const Dialogitem = (props) => {
//     return (
//         <div className={s.dialog} >
//             <NavLink to ={"/dialogs/" + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
//         </div>
//     )
// }
//
// const Messages = (props) => {
//     return (
//         <div className= {s.message}>
//             {props.message}
//         </div>
//     )
// }
//
// let dialogsData = [
//     {name: "Narek333", id: "111",},
//     {name: "Mari", id: "222"},
//     {name: "Karen", id: "333"},
//     {name: "Anahit", id: "444"},
//     {name: "Armen", id: "555"},
// ]
//
// let messagesData = [
//     {id : "1", message : "hiiii"},
//     {id : "2", message : "How are you"},
//     {id : "3", message : "What is your name"},
//     {id : "4", message : "AAAAAAAABBBBB"},
// ]
//
// const Dialogs = () => {
//     return (
//         <div className={s.dialogs} >
//             <div className= {s.dialogsItems} >
//                 <Dialogitem name={dialogsData[0].name} id={dialogsData[0].id}/>
//                 <Dialogitem name={dialogsData[1].name} id={dialogsData[1].id}/>
//                 <Dialogitem name={dialogsData[2].name} id={dialogsData[2].id}/>
//                 <Dialogitem name={dialogsData[3].name} id={dialogsData[3].id}/>
//                 <Dialogitem name={dialogsData[4].name} id={dialogsData[4].id}/>
//             </div>
//             <div className= {s.messages} >
//                 <Messages message={messagesData[0].message}/>
//                 <Messages message={messagesData[1].message}/>
//                 <Messages message={messagesData[2].message}/>
//                 <Messages message={messagesData[3].message}/>
//             </div>
//         </div>
//     )
// }


