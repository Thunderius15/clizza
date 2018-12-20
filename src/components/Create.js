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
            imagenesIngredientesPizza : [],
            precioPizza : 0
        }
        this.cambioTamaño=this.cambioTamaño.bind(this);
        this.cambioMasa=this.cambioMasa.bind(this);
        this.cambioSalsa=this.cambioSalsa.bind(this);
        this.cambioIngrediente=this.cambioIngrediente.bind(this);
        this.calculaPrecio=this.calculaPrecio.bind(this);
        //this.calculaPrecioOtros=this.calculaPrecioOtros.bind(this);
    }
    async componentDidMount(){
        var masa=0;
        var salsa=0;
        var precio=0;
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
        await this.setState({
            tamañoPizza: this.state.tamaños[0].idTamaños
        })
        await this.state.ingredientes.map((ingrediente) => {
            if(masa===0){
                if(ingrediente.categoriaIngrediente==="Masa"){
                    masa=1;
                    this.setState({
                        masaPizza: ingrediente.idIngrediente,
                        imagenMasaPizza: ingrediente.nombreImagen
                    })
                    /*await fetch('http://localhost:8080/precioIngrediente?idTamaño')
                    .then(response => response.json())
                    .then((ingrediente) => {
                        this.setState({
                            ingredientes: ingrediente
                        });
                    });*/
                }
            }
        });
        await this.state.ingredientes.map((ingrediente) => {
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
        this.calculaPrecio();
    }
    async cambioTamaño(e){
        await this.setState({
            tamañoPizza: e.target.value
        });
        this.calculaPrecio();
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
        //this.calculaPrecio();
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
        //this.calculaPrecio();
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
        //this.calculaPrecio();
    }
    async calculaPrecio(){
        var precios=[];
        var tamañoPizza=this.state.tamañoPizza;
        await fetch('http://localhost:8080/precioIngrediente?idTamaño='+tamañoPizza+"&idIngrediente="+this.state.masaPizza)
        .then(response => response.json())
        .then((dato) => {
            precios.push(dato.precio);
        });
        await fetch('http://localhost:8080/precioIngrediente?idTamaño='+tamañoPizza+"&idIngrediente="+this.state.salsaPizza)
        .then(response => response.json())
        .then((dato) => {
            precios.push(dato.precio);
        });
        var precio=0;
        //this.calculaPrecioOtros();
        precios.forEach(function(valor){
            precio=precio+valor;
        })
        this.setState({
            precioPizza: precio
        });
    }
    /*async calculaPrecioOtros(){
        var precios=[];
        var tamañoPizza=this.state.tamañoPizza;
        for(var i=0; i<this.state.ingredientesPizza; i++){
        //await this.state.ingredientesPizza.forEach(function(ingrediente){
            fetch('http://localhost:8080/precioIngrediente?idTamaño='+tamañoPizza+"&idIngrediente="+this.state.ingredientesPizza[i])
            .then(response => response.json())
            .then((dato) => {
                precios.push(dato.precio);
            });
        //});
        }
        console.log(precios);
    }*/
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
                <img src={require("../images/"+ingrediente)} key={i} class="imagenPizza"></img>
            );
        });
        const pizza=
            <div>
                <img src={require("../images/"+nombreImagenMasa)} class="imagenPizza"></img>
                <img src={require("../images/"+nombreImagenSalsa)} class="imagenPizza"></img>
                {imagenesOtrosIngredientes}
            </div>;
        const precioPizza = 
            <div>{this.state.precioPizza}</div>
        return(
            <div>
                {tamaños}
                {masas}
                {salsas}
                {otros}
                {pizza}
                {precioPizza}
            </div> 
        );
    }
}
export default Create;