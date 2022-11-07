
import React, {Component} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/AgregarCampoCasilla.js'
import AgregarCampoCasilla from '../components/AgregarCampoCasilla.js';
import AgregarCampoOpcion from '../components/AgregarCampoOpcion';
import ComboTareas from '../components/ComboTareas';
 
class LandingEdicionForms extends Component{

  state = {
    checks : [],
    radio : [],
    
}


    render() {

      const {checks, radio} = this.state;

      const handlerCheck = () => {
        const newTareas = [...checks]
        this.setState( { checks :newTareas 
         } )
      }

      const handlerRadio = () => {
        const newTareas = [...radio]
        this.setState( { radio :newTareas 
         } )
      }



      const handlerAddField = () =>{ 
      const newTareas = [...checks]
      newTareas.push({"nombre":"Agrege la pregunta aqui"})
      this.setState( { checks :newTareas } )
      }


      const handlerAddField2 = () =>{ 
        const newTareas = [...radio]
        newTareas.push({"nombre":"Agrege la pregunta aqui"})
        this.setState( { radio :newTareas } )
        }


      const handlerAddTitle = () => {
       
        alert("Botón Presionado")
     }
        return(
            
        <div class="container">
            <div class="row">
              {/*Panel publicidad*/}
              <div class="col-3  border border-5"><h1>Publicidad</h1></div>
              {/*Panel de creacion del formulario*/}
              <div class="col-6  border border-5">
                {/*<h1>Título del formulario</h1>*/}
                {/*<h3>Descripción</h3>*/}
                <input type="text" class="form-control" placeholder="Título del formulario" aria-label="Título del formulario"></input>
                <input type="text" class="form-control" placeholder="Descripción" aria-label="Descripción"></input>
                
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
                
                {/*{cantidadTareasIncompletas > 0 && <ComboTareas lista={tareas} filtro={false} cantidadTareas= {cantidadTareasIncompletas}/>}
                {cantidadTareasCompletas > 0 && <ComboTareas lista={tareas} filtro={true} cantidadTareas= {cantidadTareasCompletas}/>}*/}
                <br></br>
                { /*<AgregarCampoCasilla lista={tareas} handlerCheck={handlerCheck}/> ? <AgregarCampoCasilla lista={tareas} handlerCheck={handlerCheck}/> : <AgregarCampoOpcion lista={tareas} handlerCheck={handlerCheck}/>*/}
                <AgregarCampoCasilla lista={checks} handlerCheck={handlerCheck}/> 
                <AgregarCampoOpcion lista={radio} handlerRadio={handlerRadio}/>
                
                
              
                <br></br>
                <i class="fa-solid fa-trash-can"></i>
              </div>
       
             {/*Panel publicidad*/}
              <div class="col-3  border border-5">
              <h1>Campos para agregar al formulario</h1>
            
             <button type="button" onClick={handlerAddTitle} class="btn btn-outline-success btn-lg">Agregar Título</button>
             <br></br>
             <br></br>
            
             
            
             {/*<input id="tareatext" type="text" ref={ele => this.campoAgregar = ele}/>*/}
           
               
            
             
             
             <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
               <button type="button" onClick={handlerAddField} class="btn btn-outline-danger btn-lg">Casilla <i class="fa-regular fa-square-check"></i></button>
               <button type="button" onClick={handlerAddField2} class="btn btn-outline-danger btn-lg">Opción <i class="fa-regular fa-circle-dot"></i></button>
               <button type="button" class="btn btn-outline-danger btn-lg">Button</button>
               <button type="button" class="btn btn-outline-danger btn-lg">Button</button>
               <button type="button" class="btn btn-outline-danger btn-lg">Button</button>
               <button type="button" class="btn btn-outline-danger btn-lg">Button</button>
               <button type="button" class="btn btn-outline-danger btn-lg">Button</button>
              </div>

            </div>
            </div>
          </div>
        )
    }
}

export default LandingEdicionForms