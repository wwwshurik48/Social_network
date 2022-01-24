import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {DialogsReducerType, sendMessageAC, updateNewMessageBody} from "../../Redux/Dialogs-reducer";
import {Dispatch} from "redux";

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    dialogsPage: DialogsReducerType
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBody(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;


// export type dialogsDataForContainer = {
//     store: StoreType
//     // stateApp: propsStateType
//     // dispatch: (action: ActionsTypes) => void
// }

// export const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let OnClickButton = () => {
//                 store.dispatch(sendMessageAC())
//                 // props.dispatch(sendMessageAC())
//             }
//             let onNewMessageChange = (body: any) => {
//                 store.dispatch(updateNewMessageBody(body))
//             }
//             return <Dialogs
//                 updateNewMessageBody={onNewMessageChange}
//                 sendMessage={OnClickButton}
//                 store={store}
//             />
//         }
//         }
//     </StoreContext.Consumer>
// }