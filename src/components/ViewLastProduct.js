import React from "react"; 
import "../assets/css/ViewLastProduct.css";


function ViewLastProduct({id, nombre, precio,imagen, url, unidades, descripcion,marca, colores}){
    return(
        <div className="card-body">
            <div className="text-center">
            <h4> Tabla:</h4> <p>{nombre}</p> <br/>
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "15rem" }} src={imagen} alt="go surfing.." />
            </div>
            <div className="nmn">
            <h4> Nº:</h4><p> {id} </p> <br/>
            <h4> Marca:</h4> <p>{marca}</p><br/> 
            <h4> Descripcion:</h4> <p>{descripcion}</p> <br/>
            <h4> Unidades en stock:</h4> <p>{unidades}</p> <br/>
            <h4> Precio:</h4> <p>${precio}</p> <br/>
            <h4> Colores:</h4>
                  <ul>
                  <p>{colores.map((color, i) => 
                        <li key={i}>
                            <span key={i} > 
                                {color.color} 
                            </span>
                        </li> 
                        )}</p> <br/>
                    </ul> 
            </div>      
        </div>
    )
}

export default ViewLastProduct;