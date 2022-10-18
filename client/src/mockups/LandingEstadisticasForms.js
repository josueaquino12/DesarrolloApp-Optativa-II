
import React, {Component} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
 
class LandingEdicionForms extends Component{

    render() {

        return(
            
        <div class="container">
         <div class="row">
         
         <div class="col-3  border border-5"><h1>Publicidad</h1></div>
              
         <div class="col-9  border border-5">
             <div class="row">

                <div class="col-auto ">
                <h1>Título del formulario</h1>
                <h4>Descripción</h4>
                </div>

                <div class="col offset-md-4">
                <h1>Estadisticas</h1>
                </div>
              
              </div>

              <div class="row">

                <div class="col-3 ">
                <h4>Vivis solo</h4>
                </div>

                <div class="col-3">
                <table class="table table-bordered border-primary">
                    <tr>
                        <th scope="col">Si</th>
                        <th scope="col">No</th>
                    </tr>
                </table>
                </div>
            
               </div>

               <div class="row">

                <div class="col-3 ">
                <h4>Provincia</h4>
                </div>

                <div class="col-3">
                <table class="table table-bordered border-danger">
                    <tr>
                        <th scope="col">Respuestas</th>
                        <th scope="col">Cantidad</th>
                    </tr>
                </table>
                </div>
            
               </div>
                
            
            </div>
         </div>
        </div>
        
        )
    }
}

export default LandingEdicionForms