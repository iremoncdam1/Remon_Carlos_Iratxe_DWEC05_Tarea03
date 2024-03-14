import data from './data.js'; 

function Articulo({index}) {
    return (   
        <div className="section-center">
            {
                //Por cada elemento se crea un "article" con la imagen específica, un nombre y la categoría.
                data.map(({id, img, categoria, src }) => (
                    //Dependiendo del id del articulo y del index pasado desde el primer componente, se le pone al articulo una clase u otra
                    <article key={id} className={ ((id==index) ? 'activeSlide' : (id > index) ? "nextSlide" : 'lastSlide')}>
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