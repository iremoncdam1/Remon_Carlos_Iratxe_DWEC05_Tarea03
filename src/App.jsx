import Articulo from './articulo.jsx'   //El componente "Articulo"
import data from './data.js';   //El archivo en el que está la información
import { useState } from "react";   //El import del hook useState

//Creamos el elemento App 
function App() {
    //Se hace una variable contador (counter) y se inicializa a 1.
    const [counter, setCounter ] = useState(1);

    //Usamos "setTimeOut" para que cada dos segundos vaya actualizando en contador.
    //Si el contador ya es mayor que el número de elementos se vuleve a poner a 1.
    setTimeout(() => {
        let cont = counter>=data.length ? 1 : (counter + 1);
        setCounter(cont);
    }, 2000);

    //Se hace el primer componente y desde la etiqueta "section" se incluye el componente "Articulo" que es el que tendrá la información
    return (
        <section className="section">
            <div className="title">
                <h2>slider DWEC</h2>
                <div className="underline"></div>
            </div>
            
            <Articulo index={counter}/>
        </section>
    )
}
  
export default App