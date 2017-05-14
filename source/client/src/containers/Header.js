import {connect} from "react-redux";
import Header from "../components/Header";
import { withRouter } from 'react-router';
import {Authenticate} from "../actions/actions.js";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        authenticate(isLoggedIn) {
            dispatch(Authenticate(isLoggedIn));
        }
    }
}

const Container = connect(
    (state, props) => ({
		authenticated : state.Auth
	}),
    mapDispatchToProps
)(Header);

export default withRouter(Container);