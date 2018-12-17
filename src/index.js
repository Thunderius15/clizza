import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';

const routing = (
    <Router>
        <div>
            <Menu/>
            <Route exact path="/" component={Inicio}/>
            <Route path="/Login" component={Login}/>
            <Route path="/contacto" component={Contacto}/>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));