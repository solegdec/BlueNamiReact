import React from "react";
import "../assets/css/ViewProductDetail.css";

function ViewProductDetail( {id, nombre, precio,imagen}) {
    
    return (
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={imagen} alt="go surfing.." />
            </div>
            <p> Id: {id}</p>
            <p> Tabla: {nombre}</p>
            <p> Precio:${precio}</p> 

        </div>
    );
}


export default ViewProductDetail;