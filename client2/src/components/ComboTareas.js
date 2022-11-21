import React, {Component} from 'react'


class ComboTareas extends Component {

    
    render() {

        const {lista, filtro, cantidadTareas} = this.props;

        const listaIncompletas = lista
            .filter( e => e.completa===filtro)
            .map(e => 
                <option key={e.id} value={e.id}>{e.nombre}</option>
            );

        return (
            <div>
                <div>
                    <h3>Cantidad total de tareas {cantidadTareas}</h3>
                </div>
                <label htmlFor="tareas">Seleccione una tarea:</label>
                <select id="tareas">
                    {listaIncompletas}
                </select>
            </div>
        )
    }
}

export default ComboTareas