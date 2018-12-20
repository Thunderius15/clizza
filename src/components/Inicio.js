import React,{Component} from 'react';
import '../css/inicio.css';


class Inicio extends Component
{


    render()
    {

        return(
                 <div>

                     <h1>Las más pedidas:</h1>
                     <p>¡Escoge una de nuestras favoritas o arma la tuya!</p>
                     <h3>¡Tú decides! </h3>

                        <div className="photos">
                               <div className="uno">
                               <img src={require('../images/Pizza8.png')} alt="PimientoPiña"/>
                               <h3> Piña y Jamón</h3>
                               </div>
                               <div className="dos">
                               <img src={require('../images/Pizza7.png')} alt="Peperoni"/>
                               <h3>Peperoni y Queso</h3>
                               </div>
                               <div className="tres">
                               <img src={require('../images/pizza5.png')} alt="Aceitunas"/>
                               <h3>Aceitunas, Jitomate y Pimiento</h3>
                               </div>
                         </div>
                </div>
        );
    }
}
export default Inicio;
