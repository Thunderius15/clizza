import React,{Component} from 'react';
import '../css/Contacto.css';

class Contacto extends Component
{
    render()
    {
        return(
            <div className="container">
                <form>
                    <label htmlFor="Nombre">Nombre(s): </label>
                    <input type="text" id="Nombre" name="Nombre" placeholder="Nombre"/>

                    <label htmlFor="Apellidos">Apellidos: </label>
                    <input type="text" id="Apellidos" name="Apellidos" placeholder="Apellidos"/>

                    <label htmlFor="Colonia">Colonia</label>
                    <input type="text" id="Colonia" name="Colonia" placeholder="Colonia"/>
                    <label htmlFor="Comentarios">Comentarios: </label>
                    <textarea id="Comentarios" name="Comentarios" placeholder="¡Cuéntanos, con  gusto te leeremos!"></textarea>

                    <input type="submit" value="Enviar"/>
                </form>
            </div> 
        );
    }
}
export default Contacto;