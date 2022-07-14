import React from 'react';
import ProfileInfoContainer from "./profileinfo/ProfileInfoContainer";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer";
import {useLocation, useParams, useNavigate} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount(){  //использ с динамич компонентами
        let userId = this.props.router.params.id;
        // if (!userId) userId = 24598;
        if (!userId) userId = 2;
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(response => {
                    this.props.setUserProfile(response.data);
                    console.log(response.data);
                })
    }
    render() {
        // debugger;
        return (
            <ProfileInfoContainer {...this.props} profile={this.props.profile}/>
        )
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
let mapStateToProps = (state) => ({  //след за изменения и отоброж их
  profile: state.profilePage.profile,
})
let wrap=withRouter(ProfileContainer);
export default connect(mapStateToProps,{setUserProfile})(wrap);