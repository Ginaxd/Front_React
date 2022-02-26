// importaciones de las funciones de react
import React, {useEffect, useState} from "react"; 
import {Boton} from "./components/Boton";
// importacion de de las hoja de estilo
import './App.css';


// fUNCIÓN QUE RENDERIZA NUESTRA APP
function App() {
  //  JSX HTML EN JS PERMITE UTLIZAR HTML CON JS JUNTO
  // JAVASCRIPT EN HTML
  //! CLASS es una palabra reservada de js
  //? Hooks son funciones que vienen con react
  // * Use state -> hook
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");

  useEffect(()=>{
    //Ejecuta si cambian las variables
    setContador(100)
  },[nombre]);


  return (
    <div className="App" id="App">
      <div>
        El valor de contador es: {contador}
      </div>
      <button onClick={()=>{
        //llamamos al hook y le asignamos otro valor al contador
        setContador(contador + 300);
      }}>
        Aumentar contador</button>
      <input
        value = {nombre}
        onChange={(event)=>{
          setNombre(event.target.value);
        }}
        placeholder = "Ingresa tu nombre"

       />
       <span>
         Mi nombre es: {nombre}
       </span>
       <Boton />

    </div>
  );
}

export default App;
