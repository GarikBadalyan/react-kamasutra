import React from "react";
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                 // debugger
                console.log('777777777777777777', this.props)
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                {/*stex pastoren mer Profile-@ stanum e vorpes props profile = {this.props.profile}*/}
             <Profile {...this.props} profile = {this.props.profile} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({  // erb functian veradarcnum e object ayspes piti grenq
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer)