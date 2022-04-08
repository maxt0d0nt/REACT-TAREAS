import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from './Tarea';
import '../stylesheet/ListaDeTareas.css';

function ListaDeTareas() {

    const [tareas, setTarea] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...tareas];
            setTarea(tareasActualizadas);
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTarea(tareasActualizadas);
    }

    const commpletarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTarea(tareasActualizadas);
    }

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
            {
                tareas.map((tarea) =>
                <Tarea 
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={commpletarTarea}
                />
                )
            }
            </div>
        </>
    )
}

export default ListaDeTareas;