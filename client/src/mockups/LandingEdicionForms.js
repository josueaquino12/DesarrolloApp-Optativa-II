import React, { Component, } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/AgregarCampoCasilla.js'
import { v4 as uuid } from 'uuid';
import GuardadoExitoso from '../components/GuardarExitoso'
import GuardadoFallido from '../components/GuardarFallido'
import axios from 'axios'

const urlpost = "http://localhost:3001/api/v1/formulario/";
const urlget = "http://localhost:3001/api/v1/formulario/";

//constande de prueba para renderizar
/*const componentesprueba = [
  { idComponente: uuid(), idtipocomponente: "text", labelname: uuid() },
  { idComponente: uuid(), idtipocomponente: "condicional", labelname: "pregunta2" },
  { idComponente: uuid(), idtipocomponente: "text", labelname: "pregunta3" },
  { idComponente: uuid(), idtipocomponente: "text", labelname: "pregunta4" },
  { idComponente: uuid(), idtipocomponente: "condicional", labelname: "pregunta5" }
];*/

class LandingEdicionForms extends Component {

  //estado
  state = {
    titulo: '',
    descripcion: '',
    linkacceso:"linkprueba",
    codigoacceso:"codigoaccesoprueba",
    componentes:[],
    preview: 1,
  }

  peticionGet=()=>{
    axios.get(urlget).then(response=>{
      console.log(response)
    })
  }

  peticionPost=async()=>{
    await axios.post(urlpost,this.state).then(response=>{
      console.log(response)
      return response;
    })
  }

  //captura el titulo y la desc para guardarlo en el estado
  handleChangeTitulo = e => {
    this.setState({
      titulo: e.target.value})
   
  }

  //creo que no hace falta porque trae el nombre a cambiar en "e" lo dejo por las dudas
  handleChangeDescripcion = e => {
    this.setState({
      descripcion:e.target.value});
  }

  //captura los valores de los campos
  handleChangeComponentes = e => {
    let inputs = this.state.componentes.slice();
    for (let i in inputs) {
      if (inputs[i].idComponente === e.target.name) {
        inputs[i].labelname = e.target.value;
        this.setState({ componentes: inputs });
        break;
      }
    }
  }

  insertarComponenteEnLista = (tipoC) => {
    var componente = {
      idComponente: uuid(),
      idtipocomponente: tipoC,
      labelname: ''
    }
    var listaComponentes = this.state.componentes
    listaComponentes.push(componente)
    this.setState({ componentes: listaComponentes })
  }

  render() {
    const handlerField = () => {

    }
    const handleGuardar = (e) => {

      const respuesta = this.peticionPost();

      if (respuesta.error===false || respuesta.error ===null){
        console.log("error al cargar los archivos")
        
      }else(
        this.setState({preview:e}))
      
    }

    const handlerVerEstados = (e) => {

    }

    const cambiarModoPreview = (e) => {
      this.setState({ preview: e })
    }


    const removeFormFields = (index) => {
      let listaComponentes = this.state.componentes
      listaComponentes.splice(index, 1)
      this.setState({ componentes: listaComponentes })
    }
    if(this.state.preview === 1){
      return(
      //**** En modo edición ******
        <div class="container">
          <div class="row">
            {/*Panel publicidad*/}
            <div class="col-3  border border-5"><h1>Publicidad</h1></div>
            {/*Panel de creacion del formulario*/}
            <div class="col-6  border border-5">
              {/*<h1>Título del formulario</h1>*/}
              {/*<h3>Descripción</h3>*/}
              <input name="titulo" type="text" class="form-control" placeholder="Título del formulario" aria-label="Título del formulario" onChange={this.handleChangeTitulo} value={this.state.titulo}></input>
              <input name="descripcion" type="text" class="form-control" placeholder="Descripción" aria-label="Descripción" onChange={this.handleChangeDescripcion} value={this.state.descripcion}></input>

              <div class="border-bottom border-dark"></div>
              <br></br>

              {this.state.componentes.map((element, index) => (

                <div className="form-inline" key={element.idComponente}>
                  {

                    element.tipocomponente === "text" ? <div class="col-auto">
                      <input name={element.idComponente} class="form-control" type="text" placeholder="Pregunta texto" onChange={this.handleChangeComponentes} value={element.labelname} ></input>
                      <input class="form-control" type="text" placeholder="Respuesta" ></input>

                    </div> :
                      <div class="col-auto">
                        <input name={element.idComponente} class="form-control" type="text" placeholder="pregunta condicional" value={element.labelname} onChange={this.handleChangeComponentes}></input>
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
                  <button type="button" className="btn btn-outline-danger btn-lg" onClick={() => removeFormFields(index)}><i class="fa-solid fa-trash-can"></i></button>
                </div>
              ))}


              <br></br>

              <button type="button" onClick={() => cambiarModoPreview(2)} class="btn btn-outline-success btn-lg">Visualizar <i class="fa-solid fa-pen-to-square"></i></button>
            </div>

            {/*Panel publicidad*/}
            <div class="col-3  border border-5">
              <h3 class="text-center">Campos para agregar al formulario</h3>

              {/*<button type="button" onClick={handlerAddText} class="btn btn-outline-success btn-lg">Agregar Texto <i class="fa-solid fa-pen-to-square"></i></button>*/}
              <button type="button" onClick={() => this.insertarComponenteEnLista("text")} class="btn btn-outline-success btn-lg">Agregar Texto <i class="fa-solid fa-pen-to-square"></i></button>
              <br></br>
              <br></br>
              <button type="button" onClick={() => this.insertarComponenteEnLista("radio")} class="btn btn-outline-danger btn-lg">Condicional <i class="fa-regular fa-circle-dot"></i></button>
            </div>
          </div>
        </div>
      )
    }
    else if(this.state.preview === 2){
      return(
      <div class="container">
          <div class="row">
            {/*Panel publicidad*/}
            <div class="col-3  border border-5"><h1>Publicidad</h1></div>
            {/*Panel de creacion del formulario*/}
            <div class="col-6  border border-5">
              {/*<h1>Título del formulario</h1>*/}
              {/*<h3>Descripción</h3>*/}
              <input name="titulo" type="text" class="form-control" placeholder="Título del formulario" aria-label="Título del formulario" value = {this.state.titulo} disabled></input>
              <input name="descripcion" type="text" class="form-control" placeholder="Descripción" aria-label="Descripción"  value = {this.state.descripcion} disabled></input>

              <div class="border-bottom border-dark"></div>
              <br></br>

              {this.state.componentes.map((element, index) => (

                <div className="form-inline" key={index}>
                  {

                    element.tipocomponente === "text" ?
                      <div class="col-auto">
                        <hr></hr>
                        <input name={element.idComponente} class="form-control" type="text" placeholder="Pregunta texto" value = {element.labelname} disabled></input>
                        <input class="form-control" type="text" placeholder="Respuesta" disabled></input>

                      </div> :
                      <div class="col-auto">
                        <hr></hr>
                        <input name={element.idComponente} class="form-control" type="text" placeholder="pregunta condicional" value = {element.labelname} disabled></input>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" disabled></input>
                          <label class="form-check-label" for="flexRadioDefault1">Si</label>
                        </div>

                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" disabled></input>
                          <label class="form-check-label" for="flexRadioDefault1">No</label>
                        </div>
                      </div>

                  }

                </div>
              ))}
              <br></br>
              <button onClick={() => cambiarModoPreview(1)} type="button" class="btn btn-outline-success btn-lg">Atras <i class="fa-solid fa-arrow-left"></i></button>
              <button type="button" class="btn btn-light btn-lg" onClick={() => handleGuardar(3)}>Guardar <i class="fas fa-save"></i></button>
            </div>

            {/*Panel publicidad*/}
            <div class="col-3  border border-5">
              <h3 class="text-center">Campos para agregar al formulario</h3>

              {/*<button type="button" onClick={handlerAddText} class="btn btn-outline-success btn-lg">Agregar Texto <i class="fa-solid fa-pen-to-square"></i></button>*/}


            </div>
          </div>
        </div>
    )}
    else if(this.state.preview === 3){
      return(
        <GuardadoExitoso></GuardadoExitoso>
      )
    }
    else if(this.state.preview === 4){
      return(
        <GuardadoFallido></GuardadoFallido>
      )
    }
  }
}

export default LandingEdicionForms