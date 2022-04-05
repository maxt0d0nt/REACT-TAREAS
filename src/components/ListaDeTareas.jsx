import React, { usesState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../stylesheet/ListaDeTareas.css'

function ListaDeTareas() {

    const [tareas, setTareas] = usesState([]);

    return (
        <>
            <TareaFormulario />
            <div className="tareas-lista-contenedor">
            {
                tareas.map(tarea) =>
                <Tarea 
                texto={tarea.texto}
                completada={tarea.completada}
                />
            }
            </div>
        </>
    )
}

export default ListaDeTareas;