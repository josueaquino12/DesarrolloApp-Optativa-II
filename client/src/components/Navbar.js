
import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


class Navbar extends Component{

    render() {

        return(
            <nav class="navbar navbar-light bg-light static-top">
            <div class="container">
            <NavLink to="/"><a class="navbar-brand" href="*">UNPAZ FORMS</a></NavLink>
            </div>
            </nav>

           
           )
    }
}

export default Navbar