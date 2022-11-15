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


                    <input class="form-control" type="text" placeholder={tarea.label}></input>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked onChange={handlerOnChange}></input>
                    <label class="form-check-label" for="flexRadioDefault1">{tarea.true}</label>
                    </div>

                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked onChange={handlerOnChange}></input>
                    <label class="form-check-label" for="flexRadioDefault1">{tarea.false}</label>
                    </div>

                    </div>
                    
                
                </div>
            
            </Fragment>    
        )
    }
}

export default Opcion;