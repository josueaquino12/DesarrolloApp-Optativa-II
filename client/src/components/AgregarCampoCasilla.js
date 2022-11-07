import React, {Component} from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Casilla from './Casilla.js';
 

class AgregarCampoCasilla extends Component {

render(){
    const {lista, handlerCheck} = this.props; 

    const campo = lista.map(
        t => (
            <div key={t.id}>
                <Casilla tarea={t} handlerCheck={handlerCheck}/>
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

export default AgregarCampoCasilla;