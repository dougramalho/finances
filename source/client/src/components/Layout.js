import Header from "../containers/Header.js";
import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";


export const Layout = props => ({
  render() {
    return (
      <Grid className="o-container">
        <Header />

        <main>
            {props.children}
        </main>

      </Grid>);
  }
});