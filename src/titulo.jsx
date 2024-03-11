import Articulo from './articulo'
import data from './data.js'; 

//Creamos el elemento Titulo 
function Titulo() {
    return (
        <section className="section">
            <div className="title">
                <h2>slider DWEC</h2>
                <div className="underline"></div>
            </div>
            {
                data.map(({id, img, categoria, src }) => (
                    <Articulo key={id} img={img} categoria={categoria} src={src}/>
                ))
            }
  
        </section>
    )
}
  
export default Titulo