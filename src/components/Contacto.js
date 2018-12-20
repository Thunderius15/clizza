import React,{Component} from 'react';
import '../css/Contacto.css';

class Contacto extends Component
{
    constructor()
    {
        super();
        this.prueba=this.prueba.bind(this);
    }
    prueba()
    {
        alert("¡Gracias! Pronto te responderemos.");
    }
    render()
    {
        return(
            <div className="container">
                <form>
                    <label htmlFor="Nombre">Nombre(s): </label>
                    <input type="text" id="Nombre" name="Nombre" placeholder="Nombre"/>

                    <label htmlFor="Apellidos">Apellidos: </label>
                    <input type="text" id="Apellidos" name="Apellidos" placeholder="Apellidos"/>

                    <label htmlFor="Correo">Correo Electrónico</label>
                    <input type="text" id="Correo" name="Correo" placeholder="Correo Electrónico"/>

                    <label htmlFor="Comentarios">Comentarios: </label>
                    <textarea id="Comentarios" name="Comentarios" placeholder="¡Cuéntanos, con  gusto te leeremos!"></textarea>

                    <input type="submit" value="Enviar" onClick={this.prueba}/>
                </form>
            </div>
        );
    }
}
export default Contacto;