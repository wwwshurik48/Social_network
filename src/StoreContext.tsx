import React from 'react';

const StoreContext = React.createContext({} as any);

export type ProviderType = {
    store: any
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {

}

export default StoreContext;
