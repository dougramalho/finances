import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';


export default class Header extends Component {
    render(){
        return (
            <div className="header">
                <Navbar>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">
                            <FontAwesome name="" style={{color: "#2ECC71"}} className={"fa fa-money"} size="lg"/> Finanças
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Navbar.Text>
                        Signed in as: <Navbar.Link href="#">Cida</Navbar.Link>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}