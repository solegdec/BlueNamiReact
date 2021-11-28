import React from "react"; 



function ViewFirstUser({id, categoria, nombre, apellido, genero, email, pais, fechaNac, avatar, url, imagen, enlace}){
    return(
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "20.6rem" }} src={imagen} alt="primer usuario" />
            </div>
            <p> Id: {id}</p>
            {/*<!-- <p> Categoria: {categoria}</p> -->*/}
            <p> Nombre: {nombre}</p>
            <p> Apellido: {apellido}</p>
            <p> Genero: {genero}</p>
            <p> Email: {email}</p>
            <p> Pais: {pais}</p> 
            <p> Fecha de Nacimiento: {fechaNac}</p> 
            <p> Pais: {pais}</p> 
        </div>
    )
}

export default ViewFirstUser;