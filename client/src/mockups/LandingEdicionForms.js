
import React, {Component} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
 
class LandingEdicionForms extends Component{

    render() {

        return(
            
        <div class="container">
            <div class="row">
              {/*Panel publicidad*/}
              <div class="col-3  border border-5"><h1>Publicidad</h1></div>
              {/*Panel de creacion del formulario*/}
              <div class="col-6  border border-5">
                <h1>Título del formulario</h1>
                <h3>Descripción</h3>
                <div class="border-bottom border-dark"></div>
                <br></br>
                <div class="row">
                    <div class="col-auto"><label for="campname">Nombre del campo</label></div>
                    <div class="col-auto"><input type="text" id="campname"></input></div>
                    <div class="col offset-md-4"><i class="fa-solid fa-xmark"></i></div>
                    
                   
                </div>
                <div class="row">
                <div class="col-auto"><label for="campname">Nombre del campo</label></div>
                <div class="col-auto">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">Si</label>
                    </div>
                    <div class="form-check">
                     <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                     <label class="form-check-label" for="flexRadioDefault2">No</label>
                     </div>
                </div>
                <div class="col offset-md-4"><i class="fa-solid fa-xmark"></i></div>
                </div>  
              </div>
       
             {/*Panel publicidad*/}
              <div class="col-3  border border-5">
              <h1>Campos para agregar al formulario</h1>
              <div class="border border-success p-2 mb-2"><h3>Titulos</h3></div>
              <div class="border border-success p-2 mb-2"><h3>Condicional</h3></div>
              </div>

            </div>
          </div>
        )
    }
}

export default LandingEdicionForms