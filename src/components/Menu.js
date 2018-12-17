import React,{Component} from 'react';
import '../css/Menu.css';
import {NavLink} from 'react-router-dom';

class Menu extends Component
{
    render(){
        return(
            <div className="navbar">
                <NavLink exact to="/" activeClassName="active">Bienvenido</NavLink>
                <NavLink to="/create" activeClassName="active">¡Arma tu Pizza!</NavLink>
                <NavLink to="/sucursales" activeClassName="active">Nuestras Sucursales</NavLink>
                <NavLink to="/promociones" activeClassName="active"> Nuestras Promociones</NavLink>
                <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>
                <NavLink to="/registrer" activeClassName="active">Reistro</NavLink>
            </div> 
        );
    }
}
export default Menu;