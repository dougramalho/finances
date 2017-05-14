import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';


export default class Header extends Component {
    
    renderAuthButton(){
        if(this.props.authenticated){
            return <button onClick={ () => this.props.authenticate(false)} style={{marginTop: "15px"}}>Sign Out</button>
        }

        return <button onClick={ () => this.props.authenticate(true)} style={{marginTop: "15px"}}>Sign In</button>
    }
    
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
                        {this.renderAuthButton()}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}