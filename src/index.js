import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Registrer from './components/Registrer';
import Create from './components/Create';
import "./css/index.css";

const routing = (
    <Router>
        <div>
            <Menu/>
            <div className="contenido">
                <Route exact path="/" component={Inicio}/>
                <Route path="/Login" component={Login}/>
                <Route path="/contacto" component={Contacto}/>
                <Route path="/registrer" component={Registrer}/>
                <Route path="/create" component={Create}/>
            </div>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));