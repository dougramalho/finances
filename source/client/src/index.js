import storeFactory from "./store";
import initialState from "./initialState";

let store = storeFactory(initialState);

let pagamento = {
    valor: 15.00,
    cliente: "Douglas",
    FormaPagamento: "Dinheiro"
};

