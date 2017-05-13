import {expect} from "../test_helper";
import {
    Recebimentos,
	Pagamentos
} from "../../src/store/reducers.js";
import CONSTANTS from "../../src/constants.js";

describe("Reducers", () => {
    
    let recInitialState, pagInitialState, cxInitialState, action;

    beforeEach(() => {
        recInitialState = [
            {
                id: 1,
                valor: 15.50,
                cliente: "Douglas",
                FormaPagamento: "Dinheiro",
                data: new Date("5/8/2017")
            },
            {
                id: 2,
                valor: 50.00,
                cliente: "Marisa",
                FormaPagamento: "Cheque",
                data: new Date("5/11/2017")
            },
            {
                id: 3,
                valor: 15.50,
                cliente: "Elena",
                FormaPagamento: "Dinheiro",
                data: new Date("5/3/2017")
            },
            {
                id: 4,
                valor: 290.00,
                cliente: "Angélica",
                FormaPagamento: "Cheque",
                data: new Date("5/4/2017")
            },
            {
                id: 5,
                valor: 100.00,
                cliente: "Maria Lucas",
                FormaPagamento: "Dinheiro",
                data: new Date("5/11/2017")
            }
        ];

        pagInitialState = [
            {
                id: 1,
                valor: 21,
                destino: "Linhas",
                FormaPagamento: "Dinheiro",
                data:  new Date("5/8/2017"),
                tipo: "especie"
            },
            {
                id: 2,
                valor: 150,
                destino: "Manutenção máquina",
                FormaPagamento: "Cheque",
                data:  new Date("5/10/2017"),
                tipo: "especie"
            },
            {
                id: 3,
                valor: 25,
                destino: "Tecidos",
                FormaPagamento: "Cheque",
                data:  new Date("5/10/2017"),
                tipo: "duplicata",
                parcela: "1",
                totalParcelas: "3"
            }
        ];

        cxInitialState = [];

        action = {
            type: ""
        };
    });
    
    
    describe("Recebimentos Reducer", () => {
        it("handles action with unkown type", () => {
            //expect(Recebimentos()).to.be.instanceof(Array);
            expect(Recebimentos(undefined, {})).to.eql([]);
        });

        it("LISTAR_RECEBIMENTOS", () =>{
            action.type = CONSTANTS.LISTAR_RECEBIMENTOS;
            action.payload = {
                dataInicial: new Date("5/8/2017"),
                dataFinal: new Date("5/11/2017")

            };
            let expected = [
                {
                    id: 1,
                    valor: 15.50,
                    cliente: "Douglas",
                    FormaPagamento: "Dinheiro",
                    data: new Date("5/8/2017")
                },
                {
                    id: 2,
                    valor: 50.00,
                    cliente: "Marisa",
                    FormaPagamento: "Cheque",
                    data: new Date("5/11/2017")
                },
                {
                    id: 5,
                    valor: 100.00,
                    cliente: "Maria Lucas",
                    FormaPagamento: "Dinheiro",
                    data: new Date("5/11/2017")
                }
            ]
            expect(Recebimentos(recInitialState, action)).to.eql(expected);
        });

        it("INSERIR_RECEBIMENTO", () =>{
            let recebimento = {
                    id: 6,
                    valor: 200.00,
                    cliente: "Babi",
                    FormaPagamento: "Dinheiro",
                    data: new Date("5/11/2017")
                };
            let expected = [...recInitialState, recebimento];
            action.type = CONSTANTS.INSERIR_RECEBIMENTO;
            action.payload = recebimento;
            expect(Recebimentos(recInitialState, action)).to.eql(expected);
        });

        it("EDITAR_RECEBIMENTO", () =>{
            let recebimento = {
                id: 4,
                valor: 290.00,
                cliente: "Angélica",
                FormaPagamento: "Cheque",
                data: new Date("5/4/2017")
            };

            action.type = CONSTANTS.EDITAR_RECEBIMENTO;
            action.payload = 4;
            expect(Recebimentos(recInitialState, action)).to.eql(recebimento);
        });

        it("SALVAR_RECEBIMENTO", () =>{
            let alterado = {
                id: 4,
                valor: 290.00,
                cliente: "Angélica Alterado",
                FormaPagamento: "Cheque",
                data: new Date("5/4/2017")
            };

            let expected = recInitialState.map((recebimento, i) => recebimento.id === alterado.id ?alterado : recebimento);

            action.type = CONSTANTS.SALVAR_RECEBIMENTO;
            action.payload = alterado;
            expect(Recebimentos(recInitialState, action)).to.eql(expected);
        });
    });

    describe("Pagamentos Reducer", () => {
        it("handlers action with unkown type", () => {
            expect(Pagamentos(undefined, {})).to.eql([]);
        });

        it("LISTAR_PAGAMENTOS", () =>{
            action.type = CONSTANTS.LISTAR_PAGAMENTOS;
            action.payload = {
                dataInicial: new Date("5/8/2017"),
                dataFinal: new Date("5/8/2017")

            };

            let expected = [
                {
                    id: 1,
                    valor: 21,
                    destino: "Linhas",
                    FormaPagamento: "Dinheiro",
                    data:  new Date("5/8/2017"),
                    tipo: "especie"
                }
            ];

            expect(Pagamentos(pagInitialState, action)).to.eql(expected);
        });

        it("INSERIR_PAGAMENTO", () =>{
            let pagamento = {
                    id: 6,
                    valor: 21,
                    destino: "Linhas",
                    FormaPagamento: "Dinheiro",
                    data:  new Date("5/8/2017"),
                    tipo: "especie"
                };
            let expected = [...pagInitialState, pagamento];
            action.type = CONSTANTS.INSERIR_PAGAMENTO;
            action.payload = pagamento;
            expect(Pagamentos(pagInitialState, action)).to.eql(expected);
        });

        it("INSERIR_PAGAMENTO_DUPLICADA", () =>{
            let pagamento = {
                    id: 4,
                    valor: 25,
                    destino: "Tecidos",
                    FormaPagamento: "Cheque",
                    data:  new Date("5/10/2017"),
                    tipo: "duplicata",
                    parcela: "1",
                    totalParcelas: "3"
            };
            let expected = [...pagInitialState, pagamento];
            action.type = CONSTANTS.INSERIR_PAGAMENTO_DUPLICADA;
            action.payload = pagamento;
            expect(Pagamentos(pagInitialState, action)).to.eql(expected);
        });

        it("EDITAR_PAGAMENTO", () =>{
             let pagamento = {
                id: 2,
                valor: 150,
                destino: "Manutenção máquina",
                FormaPagamento: "Cheque",
                data:  new Date("5/10/2017"),
                tipo: "especie"
            };

            action.type = CONSTANTS.EDITAR_PAGAMENTO;
            action.payload = 2;
            expect(Pagamentos(pagInitialState, action)).to.eql(pagamento);
        });

        it("SALVAR_PAGAMENTO", () =>{
            let alterado = {
                id: 2,
                valor: 300,
                destino: "Manutenção máquina hehe",
                FormaPagamento: "Cheque",
                data:  new Date("5/10/2017"),
                tipo: "especie"
            };

            let expected = pagInitialState.map((pagamento, i) => pagamento.id === alterado.id ? alterado : pagamento);

            action.type = CONSTANTS.SALVAR_PAGAMENTO;
            action.payload = alterado;
            expect(Pagamentos(pagInitialState, action)).to.eql(expected);
        });
    });

});

