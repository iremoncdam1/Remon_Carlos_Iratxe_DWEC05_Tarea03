function Articulo({img, categoria, src}) {
    return (
        <div className="section-center">
            {/*
                <article className="lastSlide">
                    <img src={src} alt={img} className="person-img"></img>
                    <h4>{img}</h4>
                    <p className="title">{categoria}</p>
                </article>
            */}
            
            <img src={src} alt={img} className="person-img"></img>
            <h4>{img}</h4>
            <p className="title">{categoria}</p>
        
           

      </div>
    )
}

export default Articulo