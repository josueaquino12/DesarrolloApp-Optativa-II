
import React, {Component} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class LandingEdicionForms extends Component{

    constructor(props) {
      super(props)
      this.state = { 
        titulo_desc:{label: '', value: ''},
        resetTitle: {label: '', value: ''}, 
        campos : [],
        resetFields: [],      
  
       };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }


    
          handleChangeTitle(e) {
            const { name, value } = e.target
            this.setState({
              titulo_desc: {
                ...this.state.titulo_desc,
                [name]: value,
              },
            })
          }

          handleChange(i, e) {
            let newFields = this.state.campos;
            newFields[i][e.target.name] = e.target.value;
            this.setState({ newFields });
            }


         handlerAddField = () => {
          this.setState(({
            campos: [...this.state.campos, {label: "", value: ""}]
          }))
         }
    
        removeFormFields = (i) => {
          let formValues = [...this.state.campos];
          formValues.splice(i, 1);
          this.setState({ campos :formValues });
         }

         handlerAddTitle = () => {
          this.setState(({
            titulo_desc: [...this.state.titulo_desc, {label: "", value: ""}]
          }))
         }
          
          handleSubmit = (event) => {

          event.preventDefault();
          
         // alert(JSON.stringify("Titulo y descripción "+ this.state.titulo_desc +" - Campos "+ this.state.campos+ " guardados."));
        alert(JSON.stringify(this.state.titulo_desc)); 
        alert(JSON.stringify(this.state.campos));
        

        this.setState({campos : this.state.resetFields,
          titulo_desc : this.state.resetTitle})
        
        }

    render() {
      
        return(
            
        <div class="container">
            <div class="row">
              {/*Panel publicidad*/}
              <div class="col-3  border border-5"><h1>Publicidad</h1></div> 
              {/*Panel de creacion del formulario*/}
              <div class="col-6  border border-5">
                 <br></br>
               
            <form  onSubmit={this.handleSubmit}>

                <label for="title">Título del formulario</label>
                <input id="title" type="text" name="label" class="form-control" placeholder={this.state.titulo_desc.label} aria-label="Título del formulario" onChange={this.handleChangeTitle} required></input>
                
                <label for="desc">Descripción</label>
                <input id="desc"  type="text" name="value" class="form-control" placeholder={this.state.titulo_desc.value} aria-label="Descripción" onChange={this.handleChangeTitle} ></input>
                <br></br>
                <div class="border-bottom border-dark"></div>
                <br></br>

              {this.state.campos.map((element, index) => (


                <div className="container form-inline" key={index} >
                 
                 <div class="row">

                 {
                   <div class="col-10">
                  <label for="ask">Agregue la pregunta aquí</label>
                  <input id="ask" class="form-control" name="label" type="text" placeholder={element.label } onChange={e => this.handleChange(index, e)} required></input>  
                
                  <input class="form-control" name="value" type="text" placeholder={element.value }  onChange={e => this.handleChange(index, e)} ></input>  
                  </div> 

                 }
                 

                 
                 {
                 index + 1 ?
                 <div class="col-2"> 
                  <button type="button"  className="btn btn-outline-danger btn-lg" onClick={() => this.removeFormFields(index)}><i class="fa-solid fa-trash-can"></i></button>
                  
                  </div> 
                  
                  : null
                 }
                 
                 
                </div> 
                <br></br>
               </div>
                

              ))}
                
                         
                <br></br>
                <button class="btn btn-outline-success btn-lg" type="submit">Guardar<i class="fa-solid fa-pen-to-square"></i></button>
              </form> 
              </div>
             
             {/*Panel Agregar Campos*/}
                     <div class="col-3 border border-5">
                        <div class="container text-center">
                         <div class="row align-items-start">
                            <div class="col">
                            <h3 class="text-center">Campos para agregar al formulario</h3>
                            </div>
                         </div>
                         <div class="col">
                          <br></br>
                           <button type="button" onClick={() =>this.handlerAddField()}  class="btn btn-outline-success btn-lg">Agregar Texto<i class="fa-solid fa-pen-to-square"></i></button>
                         </div>
                        </div>
                      <br></br>
                      <br></br>
                      {/*<button type="button" onClick={() =>this.handlerAddField()}  class="btn btn-outline-danger btn-lg">Condicional <i class="fa-regular fa-circle-dot"></i></button>*/}
                     </div>
          </div>
        </div>
        )
    }
}

export default LandingEdicionForms