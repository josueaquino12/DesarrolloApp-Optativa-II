import React, {Component} from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Texto from './Texto.js';
 

class AgregarCampoTexto extends Component {

render(){
    const {lista, handlerText} = this.props; 

    const texto = lista.map(
        t => (
            <div key={t.id}>
                <Texto tarea={t} handlerText={handlerText}/>
                
            </div>
        )
    )
    return(


        <div className="bg-light text-dark">
           {texto}
        </div>
    )
}

}

export default AgregarCampoTexto;