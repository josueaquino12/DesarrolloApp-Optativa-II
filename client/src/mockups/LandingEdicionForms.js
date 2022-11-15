
import React, {Component} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/AgregarCampoCasilla.js'
//import AgregarCampoCasilla from '../components/AgregarCampoCasilla.js';
import AgregarCampoOpcion from '../components/AgregarCampoOpcion';
//import ComboTareas from '../components/ComboTareas';
import AgregarCampoTexto from '../components/AgregarTexto';
import LandingFormulario from './LandingFormulario'
 
class LandingEdicionForms extends Component{

  state = {
    radio : [],
    text: [],
   
   /* campos: [
     { 
     
      "text": [{label: "Escriba la pregunta", value: "Agrege la respuesta aquí"}] ,
      "radio": [{label: "Escriba la pregunta aqui", true: "Sí", false: "No"}]}] ,*/
     campos:[],

    }

    render() {
      
      const {campos} = this.state;
      /*const { radio, text} = this.state;

      const handlerRadio = () => {
        const newTareas = [...radio]
        this.setState( { radio :newTareas 
         } )
      }

      const handlerText = () => {
        const newTareas = [...text]
        this.setState( { text :newTareas 
         } )
      }


      const handlerAddField = () =>{ 
        const newTareas = [...radio]
        newTareas.push({ id : 0, label: "Escriba la pregunta aqui", true: "Sí", false: "No" })
        this.setState({radio :newTareas })
        }

        const handlerAddText = () => {
          const newTareas = [...text]
          newTareas.push({ id : 0, label: "Escriba la pregunta aqui", value: "Agrege la respuesta aquí" })
          this.setState( { text :newTareas } )
         }*/
         
        /* const lista = campos.map(
          t => (
              <div key={t}>
                 
                 <div class="col-auto">
                 <input class="form-control" type="text" placeholder={campos.label} ></input>  
                 <input class="form-control" type="text" placeholder={campos.value} ></input>  
                 </div>
                 {
                  
                  campos.length  ?  
 
                  <button type="button"  className="btn btn-outline-danger btn-lg" onClick={() => removeFormFields(t)}><i class="fa-solid fa-trash-can"></i></button> 
                   
                  : null
 
                 }
              </div>
               )
          )*/

         const handlerField = () => {
         /* const newTareas = [...campos]
          this.setState( { campos :newTareas } )

          let newTareas = [...campos];
          newTareas[i][e.target.name] = e.target.value;
          this.setState({ newTareas });*/
        
        }



         const handlerAddField = (event) => {
          const newTareas = [...campos]
          if (event === "text")
          {
            newTareas.push({label: "Escriba la pregunta", value: "Agrege la respuesta aquí" })
            
          } 
          else if (event === "radio")
          {
            newTareas.push({label: "Escriba la pregunta aqui", true: "Sí", false: "No" })
           
          } 

            this.setState( { campos :newTareas } )

           // this.setState([...campos, { label: "", value: "" }])
          return event;

         }
    

         const removeFormFields = (i) => {
          let formValues = [...campos];
          formValues.splice(i, 1);
          this.setState({ campos :formValues });
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
              
          {campos.map((element, index) => (
           <div className="form-inline" key={index}>
                 
                 {
                  handlerAddField == "text" ? <div class="col-auto">
                  <input class="form-control" type="text" placeholder="{campos.label}" ></input>  
                  <input class="form-control" type="text" placeholder="{campos.value}" ></input>  
                  </div> : 
                   <div class="col-auto">


                   <input class="form-control" type="text" placeholder="por favor"></input>
                   <div class="form-check">
                   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked onChange={handlerField}></input>
                   <label class="form-check-label" for="flexRadioDefault1">Si</label>
                   </div>

                   <div class="form-check">
                   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked onChange={handlerField}></input>
                   <label class="form-check-label" for="flexRadioDefault1">No</label>
                   </div>

                   </div>
                    
                 }
                 

              {
                campos.length  ? 
                  <button type="button"  className="btn btn-outline-danger btn-lg" onClick={() => removeFormFields(index)}><i class="fa-solid fa-trash-can"></i></button> 
                : null
              }
            </div>
            ))}
                
                         
                <br></br>
                
                <button type="button" class="btn btn-outline-success btn-lg">Visualizar<i class="fa-solid fa-pen-to-square"></i></button>
              </div>
       
             {/*Panel publicidad*/}
              <div class="col-3  border border-5">
              <h3 class="text-center">Campos para agregar al formulario</h3>
            
            {/*<button type="button" onClick={handlerAddText} class="btn btn-outline-success btn-lg">Agregar Texto <i class="fa-solid fa-pen-to-square"></i></button>*/}
             <button type="button" onClick={() =>handlerAddField("text")}  class="btn btn-outline-success btn-lg">Agregar Texto <i class="fa-solid fa-pen-to-square"></i></button>
             <br></br>
             <br></br>
             <button type="button" onClick={() =>handlerAddField("radio")}  class="btn btn-outline-danger btn-lg">Condicional <i class="fa-regular fa-circle-dot"></i></button>
            
            
            </div>
            </div>
          </div>
        )
    }
}

export default LandingEdicionForms