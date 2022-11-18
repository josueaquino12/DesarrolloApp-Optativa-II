import React, {Component} from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Opcion from './Opcion.js';
 

class AgregarCampoOpcion extends Component {

render(){
    const {lista, handlerRadio} = this.props; 

    const campo = lista.map(
        t => (
            <div key={t.id}>
                <Opcion tarea={t} handlerRadio={handlerRadio}/>
            </div>
        )
    )
    return(


        <div className="bg-light text-dark">
           {campo}
        </div>
    )
}

}

export default AgregarCampoOpcion;