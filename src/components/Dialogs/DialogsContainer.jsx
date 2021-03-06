import React from 'react';
import {
    updateNewMessageTextActionCreator,
    sendMessageActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageTextActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }

    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
