import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../Redux/Auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {authTC} from "../../Redux/Users-reducer";


export type HeaderContainerType = {
    isAuth: boolean
    login: null | string
    setAuthUserDataAC: (id: number, email: string, login: string) => void
    authTC: () => void
}

export class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        this.props.authTC()

        // this.props.toggleIsFetching(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        //     usersAPI.auth().then(response => {
        //         if(response.data.resultCode === 0) {
        //             let {id, email, login} = response.data.data
        //             this.props.setAuthUserDataAC(id, email, login);
        //         }
        //     });
    }
    render () {
        return <Header {...this.props}/>
    }
}
type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
type MapDispatchToPropsType = {
    setAuthUserDataAC: (id: number, email: string, login: string) => void
    authTC: () => void
}
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setAuthUserDataAC, authTC}) (HeaderContainer);
