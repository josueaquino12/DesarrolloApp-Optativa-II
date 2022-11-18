import React, {Component, Fragment} from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Texto extends Component {

    render(){

        const {tarea, handlerText} = this.props;

        const handlerOnChange = () =>{
            handlerText(tarea)
        }

        return (
            <Fragment>   
               
                <div class="row">
                
                <div class="col-auto">
                <h4>{tarea.label}</h4>
                <input class="form-control" type="text" placeholder={tarea.value}></input>  

                </div>
                    
                
                </div>
            
            </Fragment>    
        )
    }
}

export default Texto;