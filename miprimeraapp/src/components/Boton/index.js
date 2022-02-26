import React, {useState} from "react"; 
import "./styles.css";
// puede ser exportada hacia otro archivo
export function Boton(){
    const [textoBoton, setTextoBoton] = useState("Soy un boton");
    return(
        <button
          className="boton-componente"
          onClick={()=>{
            setTextoBoton("Soy Georgina");
        }}
        
        >
            {textoBoton}
            
        </button>
    );
}