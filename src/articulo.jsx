import data from './data.js'; 

function Articulo({index}) {
    //TODO:: Que hay que hacer cuando ya estamos en el último articulo
    return (   
        <div className="section-center">
            {
                data.map(({id, img, categoria, src }) => (
                 
                    <article key={id} className={ ((id==index) ? 'activeSlide' : (id < index) ? "lastSlide" : 'nextSlide')}>
                        <img src={src} alt={img} className="person-img"></img>
                        <h4>{img}</h4>
                        <p className="title">{categoria}</p>
                    </article>
                ))
            }
        </div>
    )
}

export default Articulo