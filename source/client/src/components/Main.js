import React, {Component} from "react";
import {Grid, Row, Col, Panel} from "react-bootstrap";
import Recebimentos from "../containers/recebimentos.js";
import Pagamentos from "../containers/pagamentos.js";
import Caixa from "./caixa.js";

export default class Main extends Component {
    render(){
        return (
            <Grid className="main">
                <Row>
                    <Col xs={6} md={6}>
                        <Panel header="Recebimentos" bsStyle="success">
                           <Recebimentos />
                        </Panel>
                        
                    </Col>
                    <Col xs={6} md={6}>
                        <Panel header="Pagamentos" bsStyle="danger">
                            <Pagamentos />
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <Panel header="Caixa" bsStyle="info">
                            <Caixa />
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
}