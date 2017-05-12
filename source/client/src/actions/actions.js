import CONSTANTS from "../constants";

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

export const ExibirCaixa = (filtro) => {
    return {
        type: CONSTANTS.LISTAR_CAIXA,
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