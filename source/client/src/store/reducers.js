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

            return recebimento;

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
            let pagamento = newArray.filter((pagamento) => pagamento.id === action.payload ? action.payload : pagamento);

            return pagamento;

        case CONSTANTS.SALVAR_PAGAMENTO :

            newArray = Object.assign([], state);
            
            newArray = newArray.map((pagamento) => pagamento.id === action.payload.id ? action.payload : pagamento);

            state = newArray;

            return state;
		default:
			return state;
	}
}

export const Caixa = (state=[], action) =>{
	
	let caixa = [];
	
	switch(action.type){
		case CONSTANTS.LISTAR_CAIXA :
			
            let actionListarEntradas = {
                type: CONSTANTS.LISTAR_ENTRADAS,
                payload: action.payload
            };

            let actionListarSaidas = {
                type: CONSTANTS.LISTAR_SAIDAS,
                payload: action.payload
            };

            state = [...Entradas([], actionListarEntradas), ...Saidas([], actionListarSaidas)].reverse((a, b) => {
                if (a.data > b.data) {
                    return 1;
                }
                if (a.data < b.data) {
                    return -1;
                }
                return 0;
            });

            return state;
		default:
			return state;
	}
}

export default combineReducers({
	Recebimentos,
	Pagamentos,
    Caixa
});

