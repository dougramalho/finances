import {connect} from "react-redux";
import Pagamentos from "../components/Pagamentos";
import { withRouter } from 'react-router';
import {FetchPagamentos} from "../actions/actions.js";


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPagamentos() {
            dispatch(FetchPagamentos());
        }
    }
}

const Container = connect(
    (state, props) => ({
		pagamentos : state.Pagamentos
	}),
    mapDispatchToProps
)(Pagamentos);

export default withRouter(Container);