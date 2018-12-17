import React,{Component} from 'react';

class Inicio extends Component
{
    constructor()
    {
        super();
        this.state = {
            respuesta : ""
        };
        this.saluda=this.saluda.bind(this);
    }
    saluda()
    {
        const response = fetch('http://localhost:8080/ingredientes/');
        const json = response.json();
        json.array.forEach(mensaje => {
            this.setState({
                respuesta : mensaje.mensaje
            });
        });
    }
    render()
    {
        const respuesta = <div>{this.state.respuesta}</div>
        return(
            <div>
                <input type="button" value="hola mundo" onClick={this.saluda}></input>
                {respuesta}
            </div>
        );
    }
}
export default Inicio;