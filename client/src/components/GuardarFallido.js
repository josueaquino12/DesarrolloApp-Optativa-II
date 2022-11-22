import React, {Component} from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import{
  Link
  } from "react-router-dom";
class GuardadoFallido extends Component {

render(){
    return(
        <div class="container">
          <div class="row">
            {/*Panel publicidad*/}
            <div class="col-3  border border-5"><h1>Publicidad</h1></div>
            {/*Panel de creacion del formulario*/}
            <div class="col-6  border border-5">
              {/*<h1>Título del formulario</h1>*/}
              {/*<h3>Descripción</h3>*/}
              <h1>Error al Guardar</h1>

              <div class="border-bottom border-dark"></div>
    
              <br></br>
              <Link to='/'><div class="col-auto"><button type="button" class="btn btn-light btn-lg">Ir al inicio</button></div></Link>
            </div>

            {/*Panel publicidad*/}
            <div class="col-3  border border-5">
              <h3 class="text-center">Campos para agregar al formulario</h3>
            </div>
          </div>
        </div>
    )
}

}
export default GuardadoFallido;