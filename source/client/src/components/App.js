import React, {Component} from "react";
import Main from "./Main.js";
import Header from "./Header.js";
import {Grid, Row, Col} from "react-bootstrap";

export default class App extends Component {
    render(){
        return (
            <div className="app">
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <Header />
                        </Col>
                    </Row>
                </Grid>

                <Main />
            </div>
        );
    }
}