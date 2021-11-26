import React from "react"; 



function ViewLastProduct({nombre,precio,  image,id,imagen,  url}){
    return(
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={image} alt="go surfing.." />
            </div>
            <p> Id: {id}</p>
            <p> Tabla: {nombre}</p>
            <p> Precio:${precio}</p>
            <p> Imagen:{imagen}</p>

            
            <a target="_blank" rel="nofollow" href={url}>
                Ver Detalle
            </a>
        </div>
    )
}

export default ViewLastProduct;