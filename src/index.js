import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Registrer from './components/Registrer';
import Create from './components/Create';


const routing = (
    <Router>
        <div>
            <Menu/>
            <Route exact path="/" component={Inicio}/>
            <Route path="/contacto" component={Contacto}/>
            <Route path="/registrer" component={Registrer}/>
            <Route path="/create" component={Create}/>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));