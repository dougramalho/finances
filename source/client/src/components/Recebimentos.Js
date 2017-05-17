import React, {Component} from "react";
import {Table} from "react-bootstrap";

export default class Recebimentos extends Component {
    
    constructor(props){
		super(props);
	}

    componentDidMount(){
		//this.props.fetchRecebimentos();
	}
    
    render(){
        
        let items = this.props.recebimentos.map((recebimento, i) => 
            <tr key={i}>
                <td>{recebimento.cliente}</td>
                <td>{recebimento.formaPagamento}</td>
                <td>{recebimento.data}</td>
                <td>
                    <span className={"pull-right"}>
                        {recebimento.valor}
                    </span>
                </td>
            </tr>
        );

        let total = this.props.recebimentos.reduce( function( prevVal, elem ) {
            return prevVal + elem.valor;
        }, 0 );
        
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Forma de Pagamento</th>
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
                        <td colSpan={4}>
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