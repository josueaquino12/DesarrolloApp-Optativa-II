import React, { Component, } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/AgregarCampoCasilla.js'
import { v4 as uuid } from 'uuid';
import GuardadoExitoso from '../components/GuardarExitoso'
import GuardadoFallido from '../components/GuardarFallido'
import axios from 'axios'

const urlpost = "http://localhost:5001/api/v1/formulario/";
const urlget = "http://localhost:5001/api/v1/formulario/";

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

  handleChangeTitulo = e => {
    this.setState({
      titulo: e.target.value})
   
  }

  handleChangeDescripcion = e => {
    this.setState({
      descripcion:e.target.value});
  }

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
      //**** En modo edici??n ******
        <div class="container">
          <div class="row">
            {/*Panel publicidad*/}
            <div class="col-3  border border-5"><h1>Publicidad</h1></div>
            {/*Panel de creacion del formulario*/}
            <div class="col-6  border border-5">
              {/*<h1>T??tulo del formulario</h1>*/}
              {/*<h3>Descripci??n</h3>*/}
              <input name="titulo" type="text" class="form-control" placeholder="T??tulo del formulario" aria-label="T??tulo del formulario" onChange={this.handleChangeTitulo} value={this.state.titulo}></input>
              <input name="descripcion" type="text" class="form-control" placeholder="Descripci??n" aria-label="Descripci??n" onChange={this.handleChangeDescripcion} value={this.state.descripcion}></input>

              <div class="border-bottom border-dark"></div>
              <br></br>

              {this.state.componentes.map((element, index) => (

                <div className="form-inline" key={element.idComponente}>
                  {

                    element.idtipocomponente === "text" ? <div class="col-auto">
                      <hr></hr>
                      <input name={element.idComponente} class="form-control" type="text" placeholder="Pregunta texto" onChange={this.handleChangeComponentes} value={element.labelname} ></input>
                      

                    </div> :
                    
                      <div class="col-auto">
                        <hr></hr>
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
              <input name="titulo" type="text" class="form-control" placeholder="T??tulo del formulario" aria-label="T??tulo del formulario" value = {this.state.titulo} disabled></input>
              <input name="descripcion" type="text" class="form-control" placeholder="Descripci??n" aria-label="Descripci??n"  value = {this.state.descripcion} disabled></input>

              <div class="border-bottom border-dark"></div>
              <br></br>

              {this.state.componentes.map((element, index) => (

                <div className="form-inline" key={index}>
                  {

                    element.idtipocomponente === "text" ?
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