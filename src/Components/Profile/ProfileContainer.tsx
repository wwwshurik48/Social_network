import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfile} from "../../Redux/Profile-reducer";
import Profile from "./Profile";
import {withRouter} from "../../hoc/withRouter";
import Preloader from "../common/Preloader/Preloader";
import {profileDataTC} from "../../Redux/Users-reducer";

type ProfileContainerType = {
     setUserProfile: (profile: ProfileType) => void
     profile: null| ProfileType
     params: {userId: string}
    profileDataTC: (userId: string, params: {userId: string}) => void
 }

class ProfileContainer extends  React.Component<ProfileContainerType> {
    componentDidMount() {
        this.props.profileDataTC(this.props.params.userId, this.props.params)

        // let userId = this.props.params.userId
        // if (!userId) userId='2'
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        // usersAPI.getProfile(userId).then(response => {
        //         console.log(response.data)
        //         this.props.setUserProfile(response.data);
        //     });
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


export default connect (mapStateToProps, {setUserProfile, profileDataTC}) (withRouter(ProfileContainer));