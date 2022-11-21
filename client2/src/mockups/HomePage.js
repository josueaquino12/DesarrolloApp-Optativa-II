
import React, {Component} from 'react'
import '../App.css'
import imgForm from '../img/imgForm.png'
import{
    Link
    } from "react-router-dom";
class HomePage extends Component{

    render() {

        return(
            /*container position-relative*/
       

        <div class="bg-primary bg-gradient">
            <div class="container position-relative py-5">
                <div class="row justify-content-left">
                    <div class="col-xl-6">
                        <div class="text-left text-white">  
                            <h1 class="mt-5">UNPAZ Forms</h1>
                            <h3 class="mt-2">Comienza ahora y haz tu formulario!</h3>
                            
                           
                                
                                <div class="row mb-5">
                                <Link to='/landingEdicionForms'><div class="col-auto"><button type="button" class="btn btn-light btn-lg">Crear Formulario</button></div></Link>
                                </div>
                            
                        </div>
                    </div>
                    <div class="col-xl-4">
                       <img class="activator" src={imgForm} alt="Girl in a jacket" width="300" height="400"></img>
                    </div>
                </div>
            </div>
         </div>



          
          

      
        )
    }
}

export default HomePage