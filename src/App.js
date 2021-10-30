import React from "react";
import './App.css';
import {
    Route,
    Link,
    Switch,
} from "react-router-dom";
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Doctor from "./components/Doctor";
import Showdata from "./components/showData";

function myApp() {
    return (
        <div className="App">
            <Navbar bg="info" expand="lg">
                <Container>
                    {/*<Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Doctor">Doctor</Nav.Link>
                            <Nav.Link href="/showData">Showdata</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="App-intro">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Doctor" component={Doctor}/>
                    <Route path="/showData" component={Showdata}/>
                    <Route component={Home}/>
                </Switch>
            </div>


        </div>
    );
}

export default myApp;