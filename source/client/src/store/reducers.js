import CONSTANTS from "../constants";
import { combineReducers } from "redux";
import { routeReducer } from "react-router-redux" ;

export const Recebimentos = (state=[], action) =>{

    let newArray = [];
    
	switch(action.type){
		case CONSTANTS.LISTAR_RECEBIMENTOS :

			newArray = Object.assign([], state);
            newArray = newArray.filter((recebimento) => recebimento.data >= action.payload.dataInicial && recebimento.data <= action.payload.dataFinal);
            
            return newArray;
        case CONSTANTS.INSERIR_RECEBIMENTO :
			return [...state, action.payload];

        case CONSTANTS.EDITAR_RECEBIMENTO :

            newArray = Object.assign([], state);
            let recebimento = newArray.filter((recebimento) => recebimento.id === action.payload);

            
            return recebimento.length > 0 ? recebimento[0] : {};

        case CONSTANTS.SALVAR_RECEBIMENTO :
            newArray = Object.assign([], state);
            
            newArray = newArray.map((recebimento, i) => recebimento.id === action.payload.id ? action.payload : recebimento);

            state = newArray;

            return state;
		default:
			return state;
	}
}

export const Pagamentos = (state=[], action) =>{
	
    let newArray = [];

	switch(action.type){
		case CONSTANTS.LISTAR_PAGAMENTOS :
			newArray = Object.assign([], state);
            newArray = newArray.filter((pagamento) => pagamento.data >= action.payload.dataInicial && pagamento.data <= action.payload.dataFinal);
            
            return newArray;
        case CONSTANTS.INSERIR_PAGAMENTO :
			return [...state, action.payload];
        case CONSTANTS.INSERIR_PAGAMENTO_DUPLICADA :
            return [...state, action.payload];
        case CONSTANTS.EDITAR_PAGAMENTO :
            newArray = Object.assign([], state);
            let pagamento = newArray.filter((pagamento) => pagamento.id === action.payload);

            return pagamento.length > 0 ? pagamento[0] : {};

        case CONSTANTS.SALVAR_PAGAMENTO :

            newArray = Object.assign([], state);
            
            newArray = newArray.map((pagamento) => pagamento.id === action.payload.id ? action.payload : pagamento);

            state = newArray;

            return state;
		default:
			return state;
	}
}

export const Caixa = (state=[], action) => {
    let newArray = [];

	switch(action.type){
		case CONSTANTS.LISTAR_CAIXA :
			newArray = Object.assign([], state);
            newArray = newArray.filter((caixa) => caixa.data >= action.payload.dataInicial && caixa.data <= action.payload.dataFinal);
            
            return newArray;
        case CONSTANTS.INSERIR_CAIXA :
			return [...state, action.payload];
		default:
			return state;
	}
}

export const Auth = (state=false, action) => {
    
    switch(action.type) {
        case CONSTANTS.CHANGE_AUTH :
            return action.payload
        default :
            return state;
    }
}

export default combineReducers({
	Recebimentos,
	Pagamentos,
    Caixa,
    Auth
});

