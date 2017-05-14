import {connect} from "react-redux";
import Caixa from "../components/Pagamentos";
import { withRouter } from 'react-router';
import {FethCaixa} from "../actions/actions.js";


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCaixa() {
            dispatch(FethCaixa());
        }
    }
}

const Container = connect(
    (state, props) => ({
		caixa : state.Caixa
	}),
    mapDispatchToProps
)(Caixa);

export default withRouter(Container);