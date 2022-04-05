import React from "react";
import '../stylesheet/Tarea.css';
import { AiFillCloseCircle } from "react-icons/ai";


function Tarea ({ id, texto, completada, completadaTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className="tarea-texto"
                onClick={() => completarTarea(id)}
            >
                { texto }
            </div>
            <div 
            className="tarea-contenedor-icono"
            onClick={() => eliminarTarea(id)}
            >
                <AiFillCloseCircle className="tarea-icono" />
            </div>
        </div>
    );
}

export default Tarea;