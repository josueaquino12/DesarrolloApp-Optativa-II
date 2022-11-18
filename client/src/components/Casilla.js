import React, {Component, Fragment} from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Casilla extends Component {

    render(){

        const {tarea, handlerCheck} = this.props;

        const handlerOnChange = () =>{
            handlerCheck(tarea)
        }

        return (
            <Fragment>   
               
                <div class="row">
                
                <div class="col-auto">

                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" id="flexCheckDefault1" checked onChange={handlerOnChange}></input>
                    <label class="form-check-label" for="flexCheckDefault1">{tarea.nombre}</label>
                    </div>

                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" id="flexCheckDefault2"  onChange={handlerOnChange}></input>
                    <label class="form-check-label" for="flexCheckDefault2">{tarea.nombre}</label>
                     </div>

                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" id="flexCheckDefault3"  onChange={handlerOnChange}></input>
                    <label class="form-check-label" for="flexCheckDefault3">{tarea.nombre}</label>
                    </div>


                    </div>
                    
                
                </div>
            
            </Fragment>    
        )
    }
}

export default Casilla;