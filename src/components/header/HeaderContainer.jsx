import React from 'react';
import {useLocation, useParams, useNavigate,} from "react-router-dom";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserData} from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {
    componentDidMount(){  //использ с динамич компонентами
         axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
             withCredentials: true,
         })
                .then(response => {
                    debugger;
                   if (response.data.resultCode === 0) {
                       let {id, login, email} = response.data.data;
                       this.props.setUserData(id,email,login);
                       console.log(id,email,login);
                   }
                })
    }
    render() {
        // debugger;
              return <Header {...this.props}/>
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
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
let wrap=withRouter(HeaderContainer);
export default connect(mapStateToProps,{setUserData})(wrap);