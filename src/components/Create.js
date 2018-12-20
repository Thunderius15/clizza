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
        precios.forEach(function(valor){
            precio=precio+valor;
        })
        this.setState({
            precioPizza: precio
        });
    }
    render()
    {
        const tamaños = 
            <fieldset className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <legend>Tamaños</legend>
                {this.state.tamaños.map((tamaño,i) => {
                    if(i===0){
                        return(
                            <div key={i} className="form-group">
                                <label className="custom-control custom-radio">
                                    <input type="radio" name="tamaño" value={tamaño.idTamaños} onChange={this.cambioTamaño} defaultChecked/>
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">{tamaño.tamaño}</span>
                                </label>
                            </div>
                        );
                    }
                    else{
                        return(
                            <div key={i} className="form-group">
                                <label className="custom-control custom-radio">
                                    <input type="radio" name="tamaño" value={tamaño.idTamaños} onChange={this.cambioTamaño}/>
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">{tamaño.tamaño}</span>
                                </label>
                            </div>
                        );
                    }
                })}
            </fieldset>;

        var cont=0;
        const masas = 
            <fieldset className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <legend>Masas</legend>
                {this.state.ingredientes.map((masa,i) => {
                    if(masa.categoriaIngrediente==="Masa"){
                        if(cont===0){
                            cont=1;
                            return(
                                <div key={i} className="form-group">
                                    <label className="custom-control custom-radio">
                                        <input type="radio" name="masa" value={masa.idIngrediente} onChange={this.cambioMasa} defaultChecked/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description">{masa.nombreIngrediente}</span>
                                    </label>
                                </div>
                            );
                        }
                        else{
                            return(
                                <div key={i} className="form-group">
                                    <label className="custom-control custom-radio">
                                        <input type="radio"name="masa" value={masa.idIngrediente} onChange={this.cambioMasa}/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description">{masa.nombreIngrediente}</span>
                                    </label>
                                </div>
                            );
                        }
                    }    
                })}
            </fieldset>;

        cont=0;
        const salsas = 
            <fieldset className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <legend>Salsas</legend>
                {this.state.ingredientes.map((salsa,i) => {
                    if(salsa.categoriaIngrediente==="Salsa"){
                        if(cont===0){
                            cont=1;
                            return(
                                <div key={i} className="form-group">
                                    <label className="custom-control custom-radio">
                                        <input type="radio" name="salsa" value={salsa.idIngrediente} onChange={this.cambioSalsa} defaultChecked/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description">{salsa.nombreIngrediente}</span>
                                    </label>
                                </div>
                            );
                        }
                        else{
                            return(
                                <div key={i} className="form-group">
                                    <label className="custom-control custom-radio">
                                        <input type="radio" name="salsa" value={salsa.idIngrediente} className="custom-control-input" onChange={this.cambioSalsa}/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description">{salsa.nombreIngrediente}</span>
                                    </label>
                                </div>
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
                    <fieldset key={i} className="form-group  col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <legend>{tipo}</legend>
                        {this.state.ingredientes.map((otro,j) => {
                            if(otro.categoriaIngrediente===tipo){
                                return(
                                    <div key={j} className="form-group">
                                        <label className="custom-control custom-checkbox">
                                            <input type="checkbox" name="masa" value={otro.idIngrediente} className="ingrediente" onChange={this.cambioIngrediente}/>
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description">{otro.nombreIngrediente}</span>
                                        </label>
                                    </div>
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
                <img src={require("../images/"+ingrediente)} key={i} className="imagenPizza"></img>
            );
        });
        const pizza=
            <div>
                <img src={require("../images/tabla.png")} className="imagenTabla"></img>
                <img src={require("../images/"+nombreImagenMasa)} className="imagenPizza"></img>
                <img src={require("../images/"+nombreImagenSalsa)} className="imagenPizza"></img>
                {imagenesOtrosIngredientes}
            </div>;
        return(
            <div className="row pagina">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 fondo">
                    <div className="row">
                        <h3 className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Create your pizza</h3>
                    </div>
                    <div className="row">
                        {tamaños}
                        {masas}
                        {salsas}
                    </div>
                    <div className="row">
                        {otros}
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="row">
                        <div className="col-xs-0 col-sm-0 col-md-1 col-lg-2 col-xl-2">
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 pizza">
                            {pizza}
                        </div>
                        <div className="col-xs-0 col-sm-0 col-md-1 col-lg-2 col-xl-2">
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
export default Create;