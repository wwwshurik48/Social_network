import React, {ComponentType} from "react";
import {useParams} from "react-router";

export function withRouter<T extends {params: any}>(WrappedComponent: ComponentType<T>) {
    return (props: Omit<T, "params">) => {
        const params = useParams<T["params"]>();
        // etc... other react-router-dom v6 hooks
        // @ts-ignore
        return (<WrappedComponent
                {...props}
                params={params}
                // etc...
            />
        );
    };
}