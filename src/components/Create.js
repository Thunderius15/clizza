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
            ingredientesPizza : [],
            tamañoPizza : 0,
            masaPizza : 0,
            salsaPizza : 0
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
                        masaPizza: ingrediente.idIngrediente
                    })
                }
            }
        });
        this.state.ingredientes.map((ingrediente) => {
            if(salsa===0){
                if(ingrediente.categoriaIngrediente==="Salsa"){
                    salsa=1;
                    this.setState({
                        salsaPizza: ingrediente.idIngrediente
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
        this.setState({
            masaPizza: e.target.value
        });
    }
    cambioSalsa(e){
        this.setState({
            salsaPizza: e.target.value
        });
    }
    cambioIngrediente(){
        var arregloIngredientes = [];
        var ingredientes=document.getElementsByClassName("ingrediente");
        for(var i=0; i<ingredientes.length; i++)
        {
            if(ingredientes[i].checked)
            {
                arregloIngredientes.push(ingredientes[i].value);
            }
        }
        this.setState({
            ingredientesPizza: arregloIngredientes
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
        var nombreImagen="Frutas.png"
        var imagen = require("../images/"+nombreImagen);
        const pizza = 
            <div>
                <img src={imagen}></img>
            </div>
        return(
            <div>
                {tamaños}
                {masas}
                {salsas}
                {otros}
                "Tamaño"+{this.state.tamañoPizza}
                "Masa"+{this.state.masaPizza}
                "Salsa"+{this.state.salsaPizza}
                <div>Pizza</div>
                {elemento}
                {pizza}
            </div> 
        );
    }
}
export default Create;