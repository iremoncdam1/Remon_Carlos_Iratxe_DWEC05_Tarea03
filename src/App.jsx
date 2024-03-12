import Articulo from './articulo.jsx'
import data from './data.js'; 
import { useState } from "react";

//Creamos el elemento Titulo 
function App() {
    const [counter, setCounter ] = useState(1);

    setTimeout(() => {
        let cont = counter>=data.length ? 1 : (counter + 1);
        setCounter(cont);
    }, 2000);

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