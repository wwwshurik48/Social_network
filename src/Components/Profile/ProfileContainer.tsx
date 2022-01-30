import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setUserProfile} from "../../Redux/Profile-reducer";
import Profile from "./Profile";

 type ProfileContainerType = {
     setUserProfile: (profile: string) => void
     profile: string
 }
class ProfileContainer extends  React.Component<ProfileContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                console.log(response.data)
                this.props.setUserProfile(response.data);

            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})
export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer);