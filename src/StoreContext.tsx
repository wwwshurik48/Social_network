import React from 'react';
import {StoreType} from "./Redux/State";

const StoreContext = React.createContext({} as StoreType);

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {

}

export default StoreContext;
