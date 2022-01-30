import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setUserProfile} from "../../Redux/Profile-reducer";
import Profile from "./Profile";
import {withRouter} from "../../hoc/withRouter";
import Preloader from "../common/Preloader/Preloader";


type ProfileContainerType = {
     setUserProfile: (profile: string) => void
     profile: string
     params: {userId: string}
 }

class ProfileContainer extends  React.Component<ProfileContainerType> {

    componentDidMount() {
        const userId = this.props.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                console.log(response.data)
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        if(!this.props.profile) {
            return <Preloader/>
        }
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})


export default connect (mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer));