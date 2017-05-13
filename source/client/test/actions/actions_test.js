import {expect} from "../test_helper";
import CONSTANTS from "../../src/constants.js";
import { 
    ListarRecebimentos ,
    ListarPagamentos,
    InserirRecebimento,
    InserirPagamentoDuplicata,
    InserirPagamento,
    EditarPagamento,
    EditarRecebimento,
    SalvarPagamento,
    SalvarRecebimento

} from "../../src/actions/actions.js";


describe("Actions", () => {
    
    let filter;

    beforeEach(() => {
        filter = {
                dataInicial: "05/05/2017",
                dataInicial: "05/12/2017",
        };
    });
    
    describe("ListarRecebimentos", () => {

        it("has the correct type", () =>{
            const action = ListarRecebimentos({});
            expect(action.type).to.equal(CONSTANTS.LISTAR_RECEBIMENTOS);
        });

        it("has the correct payload", () =>{
            
            const action = ListarRecebimentos(filter);

            expect(action.payload).to.equal(filter);
        });
    });

    describe("ListarPagamentos", () => {

        it("has the correct type", () =>{
            const action = ListarPagamentos({});
            expect(action.type).to.equal(CONSTANTS.LISTAR_PAGAMENTOS);
        });

        it("has the correct payload", () =>{
            const action = ListarPagamentos(filter);
            expect(action.payload).to.equal(filter);
        });
    });

    describe("InserirRecebimento", () => {

        it("has the correct type", () =>{
            const action = InserirRecebimento({});
            expect(action.type).to.equal(CONSTANTS.INSERIR_RECEBIMENTO);
        });

        it("has the correct payload", () =>{
            let recebimento = {
                "id": 1,
                "valor": 15.50,
                "cliente": "Douglas",
                "FormaPagamento": "Dinheiro",
                "data": "5/8/2017"
            };
            const action = InserirRecebimento(recebimento);
            expect(action.payload).to.equal(recebimento);
        });
    });

    describe("InserirPagamento", () => {

        it("has the correct type", () =>{
            const action = InserirPagamento({});
            expect(action.type).to.equal(CONSTANTS.INSERIR_PAGAMENTO);
        });

        it("has the correct payload", () =>{
            let pagamento = {
                "id": 1,
                "valor": 21,
                "destino": "Linhas",
                "FormaPagamento": "Dinheiro",
                "data": "5/8/2017",
                "tipo": "especie"
            }
            const action = InserirPagamento(pagamento);
            expect(action.payload).to.equal(pagamento);
        });
    });

    describe("InserirPagamentoDuplicata", () => {

        it("has the correct type", () =>{
            const action = InserirPagamentoDuplicata({});
            expect(action.type).to.equal(CONSTANTS.INSERIR_PAGAMENTO_DUPLICADA);
        });

        it("has the correct payload", () =>{
            let pagamento = {
                "id": 3,
                "valor": 25,
                "destino": "Tecidos",
                "FormaPagamento": "Cheque",
                "data": "5/10/2017",
                "tipo": "duplicata",
                "parcela": "1",
                "totalParcelas": "3"
            }
            const action = InserirPagamentoDuplicata(pagamento);
            expect(action.payload).to.equal(pagamento);
        });
    });

    describe("EditarPagamento", () => {

        it("has the correct type", () =>{
            const action = EditarPagamento({});
            expect(action.type).to.equal(CONSTANTS.EDITAR_PAGAMENTO);
        });

        it("has the correct payload", () =>{
            const action = InserirPagamentoDuplicata(1);
            expect(action.payload).to.equal(1);
        });
    });

    describe("EditarRecebimento", () => {

        it("has the correct type", () =>{
            const action = EditarRecebimento(1);
            expect(action.type).to.equal(CONSTANTS.EDITAR_RECEBIMENTO);
        });

        it("has the correct payload", () =>{
            const action = EditarRecebimento(1);
            expect(action.payload).to.equal(1);
        });
    });

    describe("SalvarPagamento", () => {

        it("has the correct type", () =>{
            const action = SalvarPagamento({});
            expect(action.type).to.equal(CONSTANTS.SALVAR_PAGAMENTO);
        });

        it("has the correct payload", () =>{
            let pagamento = {
                "id": 1,
                "valor": 21,
                "destino": "Linhas",
                "FormaPagamento": "Dinheiro",
                "data": "5/8/2017",
                "tipo": "especie"
            }
            const action = SalvarPagamento(pagamento);
            expect(action.payload).to.equal(pagamento);
        });
    });

    describe("SalvarRecebimento", () => {

        it("has the correct type", () =>{
            const action = SalvarRecebimento({});
            expect(action.type).to.equal(CONSTANTS.SALVAR_RECEBIMENTO);
        });

        it("has the correct payload", () =>{
            let recebimento = {
                "id": 1,
                "valor": 15.50,
                "cliente": "Douglas",
                "FormaPagamento": "Dinheiro",
                "data": "5/8/2017"
            };
            const action = SalvarRecebimento(recebimento);
            expect(action.payload).to.equal(recebimento);
        });
    });
});