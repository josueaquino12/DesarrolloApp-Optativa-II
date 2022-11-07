import React, {Component, Fragment} from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Opcion extends Component {

    render(){

        const {tarea, handlerRadio} = this.props;

        const handlerOnChange = () =>{
            handlerRadio(tarea)
        }

        return (
            <Fragment>   
               
                <div class="row">
                
                <div class="col-auto">

                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked onChange={handlerOnChange}></input>
                    <label class="form-check-label" for="flexRadioDefault1">{tarea.nombre}</label>
                    </div>

                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  onChange={handlerOnChange}></input>
                    <label class="form-check-label" for="flexRadioDefault2">{tarea.nombre}</label>
                     </div>

                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"  onChange={handlerOnChange}></input>
                    <label class="form-check-label" for="flexRadioDefault3">{tarea.nombre}</label>
                    </div>


                    </div>
                    
                
                </div>
            
            </Fragment>    
        )
    }
}

export default Opcion;