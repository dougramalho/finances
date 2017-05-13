import CONSTANTS from "../constants";
import fetch from "isomorphic-fetch";

export const ListarRecebimentos = (filtro) => {
    return {
        type: CONSTANTS.LISTAR_RECEBIMENTOS,
        payload: filtro
    };
}

export const ListarPagamentos = (filtro) => {
    return {
        type: CONSTANTS.LISTAR_PAGAMENTOS,
        payload: filtro
    };
}

export const InserirRecebimento = (recebimento) => {
    return {
        type: CONSTANTS.INSERIR_RECEBIMENTO,
        payload: recebimento
    };
}

export const InserirPagamento = (pagamento) => {
    return {
        type: CONSTANTS.INSERIR_PAGAMENTO,
        payload: pagamento
    };
}

export const InserirPagamentoDuplicata = (pagamento) => {
    return {
        type: CONSTANTS.INSERIR_PAGAMENTO_DUPLICADA,
        payload: pagamento
    };
}

export const EditarPagamento = (idPagamento) => {
    return {
        type: CONSTANTS.EDITAR_PAGAMENTO,
        payload: parseInt(idPagamento)
    };
}

export const EditarRecebimento = (idRecebimento) => {
    return {
        type: CONSTANTS.EDITAR_RECEBIMENTO,
        payload: parseInt(idRecebimento)
    };
}

export const SalvarRecebimento = (recebimento) => {
    return {
        type: CONSTANTS.SALVAR_RECEBIMENTO,
        payload: recebimento
    }
}

export const SalvarPagamento = (pagamento) => {
    return {
        type: CONSTANTS.SALVAR_PAGAMENTO,
        payload: pagamento
    }
}

export const FetchInputs = () => dispatch =>{

	fetch("http://localhost:3333/inputs/")
		.then(response => response.json())
		.then(inputs => {
			inputs.results.map(value => dispatch(InserirRecebimento(value)));
		})
		.catch(error => {
			dispatch(AddError(error.message));
		});

}

export const FetchOutputs = () => dispatch =>{

	fetch("http://localhost:3333/outputs/")
		.then(response => response.json())
		.then(outputs => {
			outputs.results.map(value => dispatch(InserirPagamento(value)));
		})
		.catch(error => {
			console.log(error);
		});

}

