import React,{Component} from 'react';
import '../css/Contacto.css';

class Contacto extends Component
{
    constructor()
    {
        super();
        this.state = {
            comentarios:""
    }

    this.Comentario = this.Comentario.bind(this);
    this.validarEmail = this.validarCorreo.bind(this);
}

    validarCorreo(valor) {
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
            return true;
        } else {
            return false;
        }
    }
    Comentario()
    {
        var Nombre = document.getElementById("Nombre").value;
        var Apellidos = document.getElementById("Apellidos").value;
        var Correo = document.getElementById("Correo").value;
        var Comentarios = document.getElementById("Comentarios").value;

        if(Nombre){
            if(Apellidos){
                if(Correo){
                    if(this.validarCorreo(Correo)){
                        if(Comentarios){
                        fetch('http://localhost:8080/comentario?Nombre='+Nombre+'&Apellido='+Apellidos+'&Correo='+Correo+'&Comentarios='+Comentarios)
                            .then(response => response.json())
                            .then((mensaje) =>{this.setState({comentarios: mensaje.contenido})
                                 });
                            document.getElementById("Nombre").value="";
                            document.getElementById("Apellidos").value="";
                            document.getElementById("Correo").value="";
                            document.getElementById("Comentarios").value="";
                        }else{
                            alert("Introduce tu mensaje.")
                               }
                    }else{
                        alert("E-mail invalido")
                         }
                }else{
                     alert("Correo requerido")
                    }
            }else{
                alert("Apellidos requerido")
                    }
        }else{
            alert("Nombre requerido")
                    }
    }
    render()
    {
        return(
            <div className="row">
                <div className="col-xs-0 col-sm-0 col-md-2 col-lg-3 col-xl-3"></div>
                    <div className= "container col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-6">
                        <form>
                            <label htmlFor="Nombre">Nombre(s): </label>
                            <input type="text" id="Nombre" name="Nombre" placeholder="Nombre"/>

                            <label htmlFor="Apellidos">Apellidos: </label>
                            <input type="text" id="Apellidos" name="Apellidos" placeholder="Apellidos"/>

                            <label htmlFor="Correo">Correo Electrónico</label>
                            <input type="text" id="Correo" name="Correo" placeholder="Correo Electrónico"/>

                            <label htmlFor="Comentarios">Comentarios: </label>
                            <textarea id="Comentarios" name="Comentarios" placeholder="¡Cuéntanos, con  gusto te leeremos!"></textarea>

                            <input type="button" value="Enviar" onClick={this.Comentario}/>
                            <div>{this.state.comentarios}</div>
                        </form>
                    </div>
                <div className="col-xs-0 col-sm-0 col-md-2 col-lg-3 col-xl-3"></div>
            </div>
        );
    }
}
export default Contacto;