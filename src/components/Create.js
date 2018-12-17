import React,{Component} from 'react';
import '../css/Create.css';

class Create extends Component
{
    render()
    {
        fetch('http://localhost:8080/prueba')
        .then(response => response.json())
        .then((ingrediente) => {
            this.setState({
                datosIngrediente: ingrediente
            });
            this.state.datosIngrediente.forEach( function(valor, indice) {
                console.log("En el índice " + indice + " hay este valor: " + valor.nombreIngrediente + " - "+valor.nombreImagen)
            });
        });
        return(

            <div>
            </div> 
        );
    }
}
export default Create;