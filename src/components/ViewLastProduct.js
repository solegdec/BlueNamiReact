import React from "react"; 



function ViewLastProduct({id, nombre, precio,imagen, url, unidades, descripcion,marca, colores}){
    return(
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "15rem" }} src={imagen} alt="go surfing.." />
            </div>
            <p> Id: {id}</p>
            <p> Nombre de la Tabla: {nombre}</p>
            <p> Marca: {marca}</p>
            <p> Descripcion: {descripcion}</p>
            <p> Unidades en stock: {unidades}</p>
            <p> Precio:${precio}</p> 
            <p> Colores:
                    <ul>
                        {colores.map((color, i) => 
                        <li key={i}>
                            <span key={i} > 
                                {color.color} 
                            </span>
                        </li> 
                        )}
                    </ul>
                
                
            </p> 
        </div>
    )
}

export default ViewLastProduct;