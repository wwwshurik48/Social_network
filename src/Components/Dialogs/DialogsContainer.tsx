import React from "react";
import {ActionsTypes, propsStateType, sendMessageAC, StoreType, updateNewMessageBody} from "../../Redux/State";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

// export type dialogsDataForContainer = {
//     store: StoreType
//     // stateApp: propsStateType
//     // dispatch: (action: ActionsTypes) => void
// }

export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {
            let OnClickButton = () => {
                store.dispatch(sendMessageAC())
                // props.dispatch(sendMessageAC())
            }
            let onNewMessageChange = (body: any) => {
                store.dispatch(updateNewMessageBody(body))
            }
            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={OnClickButton}
                store={store}
            />}
        }
            </StoreContext.Consumer>
        }



