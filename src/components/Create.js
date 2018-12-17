import React,{Component} from 'react';
import '../css/Create.css';

class Create extends Component
{
    constructor()
    {
        super();
        this.state = {
            tamaños : [],
            ingredientes : []
        }
        this.cambioTamaño=this.cambioTamaño.bind(this);
        this.cambioMasa=this.cambioMasa.bind(this);
        this.cambioSalsa=this.cambioSalsa.bind(this);
        this.cambioIngrediente=this.cambioIngrediente.bind(this);
    }
    componentDidMount()
    {
        fetch('http://localhost:8080/tamaños')
        .then(response => response.json())
        .then((tamaño) => {
            this.setState({
                tamaños: tamaño
            });
        });
        fetch('http://localhost:8080/ingredientes')
        .then(response => response.json())
        .then((ingrediente) => {
            this.setState({
                ingredientes: ingrediente
            });
        });
    }
    cambioTamaño(button){
        console.log(button.target.value);
    }
    cambioMasa(button){
        console.log(button.target.value);
    }
    cambioSalsa(button){
        console.log(button.target.value);
    }
    cambioIngrediente(){
        console.log(this.refs.check.checked);
    }
    render()
    {
        const tamaños = this.state.tamaños.map((tamaño,i) => {
            return(
                <label key={i}>
                    <input type="radio" name="tamaño" value={tamaño.idTamaños} onChange={this.cambioTamaño}/>
                    {tamaño.tamaño}
                </label>
            );
        })
        const grupoTamaños = 
            <fieldset>
                <legend>Tamaños</legend>
                {tamaños}
            </fieldset>

        const masas = this.state.ingredientes.map((masa,i) => {
            if(masa.categoriaIngrediente==="Masa"){
                return(
                    <label key={i}>
                        <input type="radio" name="masa" value={masa.idIngrediente} onChange={this.cambioMasa}/> {masa.nombreIngrediente}
                    </label>
                );
            }    
        })
        const grupoMasas = 
            <fieldset>
                <legend>Masas</legend>
                {masas}
            </fieldset>

        const salsas = this.state.ingredientes.map((salsa,i) => {
            if(salsa.categoriaIngrediente==="Salsa"){
                return(
                    <label key={i}>
                        <input type="radio" name="salsa" value={salsa.idIngrediente} onChange={this.cambioSalsa}/> {salsa.nombreIngrediente}
                    </label>
                );
            }    
        })
        const grupoSalsas = 
            <fieldset>
                <legend>Salsas</legend>
                {salsas}
            </fieldset>
        var tipo="";
        const otros = this.state.ingredientes.map((ingrediente,i) => {
            if(ingrediente.categoriaIngrediente!=="Masa" && ingrediente.categoriaIngrediente!=="Salsa" && ingrediente.categoriaIngrediente!==tipo){
                tipo=ingrediente.categoriaIngrediente;
                return(
                    <fieldset key={i} onChange={this.cambioIngrediente}>
                        <legend>{tipo}</legend>
                        {this.state.ingredientes.map((otro,j) => {
                            if(otro.categoriaIngrediente===tipo){
                                return(
                                    <label key={j}>
                                        <input type="checkbox" name={otro.categoriaIngrediente} value={otro.idIngrediente} ref="check"/> {otro.nombreIngrediente}
                                    </label>
                                );
                            }    
                        })}
                    </fieldset>
                );
            }
        })
            
        return(
            <div>
                {grupoTamaños}
                {grupoMasas}
                {grupoSalsas}
                {otros}
                <div>Pizza</div>
            </div> 
        );
    }
}
export default Create;