import {connect} from "react-redux";
import Recebimentos from "../components/Recebimentos";
import { withRouter } from 'react-router';
import {FetchRecebimentos} from "../actions/actions.js";


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRecebimentos() {
            dispatch(FetchRecebimentos());
        }
    }
}

const Container = connect(
    (state, props) => ({
		recebimentos : state.Recebimentos
	}),
    mapDispatchToProps
)(Recebimentos);

export default withRouter(Container);