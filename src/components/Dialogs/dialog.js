import s from './dialog.module.css'
import Dialogitem from "./Dialogitem/Dialogitem";
import Messages from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyActionCreator,} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogsData.map((dialog) => {
        return <Dialogitem name={dialog.name} key = {dialog.id} id={dialog.id}/>
    })

    let messageElement = state.messages.map((elem) => {
        return <Messages message={elem.message} key = {elem.id} />
    })

    let newMessageBody = state.newMessagesBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} placeholder={'write message'}
                                  onChange={onNewMessageChange}> </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}> send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs





