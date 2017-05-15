import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import { BrowserRouter, HashRouter,  Switch,  Route,  Link} from 'react-router-dom';


export default class Header extends Component {
    
    renderAuthButton(){
        if(this.props.authenticated){
            return <Link to="#" onClick={ () => this.props.authenticate(false)} style={{marginTop: "15px"}}>Sign Out</Link>
        }

        return <Link to="#" onClick={ () => this.props.authenticate(true)} style={{marginTop: "15px"}}>Sign In</Link>
    }
    
    render(){
        return (
            <div className="header">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">
                                <FontAwesome name="" style={{color: "#2ECC71"}} className={"fa fa-money"} size="lg"/> Home
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        
                        <Navbar.Text>
                            <Link to="/finances">
                                Finanças
                            </Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            {this.renderAuthButton()}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}