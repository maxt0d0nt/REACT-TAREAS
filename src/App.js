import logo from './logo.svg';
import './App.css';
import freeCampCodeLogo from './img/banner.png';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
       <img src={freeCampCodeLogo} className='frecodecamp-logo'/>
     </div>
     <div className='contenedor-tareas'>
       <div className='tarea-lista-principal'>
       <h1>Mis Tareas</h1>
       <ListaDeTareas />
       </div>
     </div>
    </div>
  )
};

export default App;
