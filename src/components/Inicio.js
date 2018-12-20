import React,{Component} from 'react';
import '../css/inicio.css';


class Inicio extends Component
{


    render()
    {
        return(
                 <div>
                     <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <h1 className="Popu">Las más pedidas:</h1>
                            <p className="favs">¡Escoge una de nuestras favoritas o arma la tuya!</p>
                            <h3 className="piedepagina">¡Tú decides! </h3>
                        </div>
                     </div>

                    <div className="photos row">
                        <div className="uno col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <img src={require('../images/Pizza8.png')} alt="PimientoPiña" className="imagen"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <h3 className="piedepagina"> Piña y Jamón</h3>
                                </div>
                            </div>
                        </div>
                        <div className="dos col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <img src={require('../images/Pizza7.png')} alt="Peperoni" className="imagen"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <h3 className="piedepagina">Peperoni y Queso</h3>
                                </div>
                            </div>
                        </div>
                        <div className="tres col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <img src={require('../images/pizza5.png')} alt="Aceitunas" className="imagen"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <h3 className="piedepagina">Aceitunas, Jitomate y Pimiento</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Inicio;
