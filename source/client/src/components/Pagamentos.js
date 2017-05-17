import React, {Component} from "react";
import {Table} from "react-bootstrap";

export default class Pagamentos extends Component {
    
    constructor(props){
		super(props);
	}

    componentDidMount(){
		//this.props.fetchPagamentos();
	}
    
    render(){
       
        let items = this.props.pagamentos.map((pagamento, i) => pagamento.tipo === "duplicata" 
            ? <DuplicataLine value={pagamento} key={i}/> 
            : <PagamentoLine value={pagamento} key={i}/>);
        
        let total = this.props.pagamentos.reduce( function( prevVal, elem ) {
            return prevVal + elem.valor;
        }, 0 );
        
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>Destino</th>
                        <th>Data</th>
                        <th>
                            <span className={"pull-right"}>
                                Valor
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                    <tr>
                        <td colSpan={3}>
                            <span className={"pull-right"}>
                                <b>Total:</b> {total}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export class DuplicataLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pagamento = this.props.value;
        return (
            <tr>
                <td>{`${pagamento.destino} parcela ${pagamento.parcela}/${pagamento.totalParcelas} `}</td>
                <td>{pagamento.data}</td>
                <td>
                    <span className={"pull-right"}>
                        {pagamento.valor}
                    </span>
                </td>
            </tr>
        );
    }
}

export class PagamentoLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pagamento = this.props.value;
        return (
            <tr>
                <td>{pagamento.destino}</td>
                <td>{pagamento.data}</td>
                <td>
                    <span className={"pull-right"}>
                        {pagamento.valor}
                    </span>
                </td>
            </tr>
        );
    }
}