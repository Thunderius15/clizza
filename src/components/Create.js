import React,{Component} from 'react';
import '../css/Create.css';

class Create extends Component
{
    constructor()
    {
        super();
        this.state = {
            tamaños : [],
            ingredientes : [],
            tamañoPizza : 0,
            masaPizza : 0,
            imagenMasaPizza : "",
            salsaPizza : 0,
            imagenSalsaPizza : "",
            ingredientesPizza : [],
            imagenesIngredientesPizza : []
        }
        this.cambioTamaño=this.cambioTamaño.bind(this);
        this.cambioMasa=this.cambioMasa.bind(this);
        this.cambioSalsa=this.cambioSalsa.bind(this);
        this.cambioIngrediente=this.cambioIngrediente.bind(this);
    }
    async componentDidMount(){
        var masa=0;
        var salsa=0;
        await fetch('http://localhost:8080/tamaños')
        .then(response => response.json())
        .then((tamaño) => {
            this.setState({
                tamaños: tamaño
            });
        });
        await fetch('http://localhost:8080/ingredientes')
        .then(response => response.json())
        .then((ingrediente) => {
            this.setState({
                ingredientes: ingrediente
            });
        });
        this.setState({
            tamañoPizza: this.state.tamaños[0].idTamaños
        })
        this.state.ingredientes.map((ingrediente) => {
            if(masa===0){
                if(ingrediente.categoriaIngrediente==="Masa"){
                    masa=1;
                    this.setState({
                        masaPizza: ingrediente.idIngrediente,
                        imagenMasaPizza: ingrediente.nombreImagen
                    })
                }
            }
        });
        this.state.ingredientes.map((ingrediente) => {
            if(salsa===0){
                if(ingrediente.categoriaIngrediente==="Salsa"){
                    salsa=1;
                    this.setState({
                        salsaPizza: ingrediente.idIngrediente,
                        imagenSalsaPizza: ingrediente.nombreImagen
                    })
                }
            }
        });
    }
    cambioTamaño(e){
        this.setState({
            tamañoPizza: e.target.value
        });
    }
    cambioMasa(e){
        var nombreImagen="logo/clizzaLOGOsolo.png";
        this.state.ingredientes.forEach(function(ingrediente){
            if(ingrediente.idIngrediente==e.target.value){
                nombreImagen=ingrediente.nombreImagen;
            }
        });
        this.setState({
            masaPizza: e.target.value,
            imagenMasaPizza: nombreImagen
        });
    }
    cambioSalsa(e){
        var nombreImagen="logo/clizzaLOGOsolo.png";
        this.state.ingredientes.forEach(function(ingrediente){
            if(ingrediente.idIngrediente==e.target.value){
                nombreImagen=ingrediente.nombreImagen;
            }
        });
        this.setState({
            salsaPizza: e.target.value,
            imagenSalsaPizza: nombreImagen
        });
    }
    cambioIngrediente(){
        var arregloIngredientes = [];
        var arregloImagenesIngredientes = [];
        var ingredientes=document.getElementsByClassName("ingrediente");
        for(var i=0; i<ingredientes.length; i++)
        {
            if(ingredientes[i].checked)
            {
                arregloIngredientes.push(ingredientes[i].value);
            }
        }
        for(i=0; i<arregloIngredientes.length; i++){
            this.state.ingredientes.forEach(function(ingrediente){
                if(ingrediente.idIngrediente==arregloIngredientes[i]){
                    arregloImagenesIngredientes.push(ingrediente.nombreImagen);
                }
            });
        }
        this.setState({
            ingredientesPizza: arregloIngredientes,
            imagenesIngredientesPizza: arregloImagenesIngredientes
        })
    }
    render()
    {
        const tamaños = 
            <fieldset>
                <legend>Tamaños</legend>
                {this.state.tamaños.map((tamaño,i) => {
                    if(i===0){
                        return(
                            <label key={i}>
                                <input type="radio" name="tamaño" value={tamaño.idTamaños} onChange={this.cambioTamaño} defaultChecked/>
                                {tamaño.tamaño}
                            </label>
                        );
                    }
                    else{
                        return(
                            <label key={i}>
                                <input type="radio" name="tamaño" value={tamaño.idTamaños} onChange={this.cambioTamaño}/>
                                {tamaño.tamaño}
                            </label>
                        );
                    }
                })}
            </fieldset>;

        var cont=0;
        const masas = 
            <fieldset>
                <legend>Masas</legend>
                {this.state.ingredientes.map((masa,i) => {
                    if(masa.categoriaIngrediente==="Masa"){
                        if(cont===0){
                            cont=1;
                            return(
                                <label key={i}>
                                    <input type="radio" name="masa" value={masa.idIngrediente} onChange={this.cambioMasa} defaultChecked/> {masa.nombreIngrediente}
                                </label>
                            );
                        }
                        else{
                            return(
                                <label key={i}>
                                    <input type="radio" name="masa" value={masa.idIngrediente} onChange={this.cambioMasa}/> {masa.nombreIngrediente}
                                </label>
                            );
                        }
                    }    
                })}
            </fieldset>;

        cont=0;
        const salsas = 
            <fieldset>
                <legend>Salsas</legend>
                {this.state.ingredientes.map((salsa,i) => {
                    if(salsa.categoriaIngrediente==="Salsa"){
                        if(cont===0){
                            cont=1;
                            return(
                                <label key={i}>
                                    <input type="radio" name="salsa" value={salsa.idIngrediente} onChange={this.cambioSalsa} defaultChecked/> {salsa.nombreIngrediente}
                                </label>
                            );
                        }
                        else{
                            return(
                                <label key={i}>
                                    <input type="radio" name="salsa" value={salsa.idIngrediente} onChange={this.cambioSalsa}/> {salsa.nombreIngrediente}
                                </label>
                            );
                        }
                    }    
                })}
            </fieldset>;
            
        var tipo="";
        const otros = this.state.ingredientes.map((ingrediente,i) => {
            if(ingrediente.categoriaIngrediente!=="Masa" && ingrediente.categoriaIngrediente!=="Salsa" && ingrediente.categoriaIngrediente!==tipo){
                tipo=ingrediente.categoriaIngrediente;
                return(
                    <fieldset key={i}>
                        <legend>{tipo}</legend>
                        {this.state.ingredientes.map((otro,j) => {
                            if(otro.categoriaIngrediente===tipo){
                                return(
                                    <label key={j}>
                                        <input type="checkbox" name={otro.categoriaIngrediente} value={otro.idIngrediente} className="ingrediente" onChange={this.cambioIngrediente}/> {otro.nombreIngrediente}
                                    </label>
                                );
                            }    
                        })}
                    </fieldset>
                );
            }
        });
        const elemento = this.state.ingredientesPizza.map((ingrediente,i) => {
            return(
                <div key={i}>{ingrediente}</div>
            );
        })
        var nombreImagenMasa="logo/clizzaLOGOsolo.png";
        if(this.state.imagenMasaPizza!==""){
            nombreImagenMasa=this.state.imagenMasaPizza;
        }
        var nombreImagenSalsa="logo/clizzaLOGOsolo.png";
        if(this.state.imagenSalsaPizza!==""){
            nombreImagenSalsa=this.state.imagenSalsaPizza;
        }
        const imagenesOtrosIngredientes = this.state.imagenesIngredientesPizza.map((ingrediente,i)=>{
            return(
                <img src={require("../images/"+ingrediente)} key={i}></img>
            );
        });
        const pizza=
            <div>
                <img src={require("../images/"+nombreImagenMasa)}></img>
                <img src={require("../images/"+nombreImagenSalsa)}></img>
                {imagenesOtrosIngredientes}
            </div>;
        return(
            <div>
                {tamaños}
                {masas}
                {salsas}
                {otros}
                {pizza}
            </div> 
        );
    }
}
export default Create;