import React from "react";
import {sendMessageCreator, updateNewMessageBodyActionCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./dialog";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//     return (<StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState().dialogsPage
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyActionCreator(body))
//                 }
//                 return <Dialogs
//                     updateNewMessageBody={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                     dialogsPage={state}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
           dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

// connect -i mej hasaneli e state -@ inq@ mtcnum e state-@ avtomat aysinqn vor connect@ kanchum e araji
// functian mapStateToProps avtomat mtcnum e state@ voch te store@: erkrord funktiayi mej
// mapDispatchToProps mtcnum e dispatch-@

// stex karevor e haskanal aysinqn Dialogs verankarvi(pereresiruysya) ete poxvum e mapStateToProps-i migi
// dialogsPage-@
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer





