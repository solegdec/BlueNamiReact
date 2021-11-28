import React from "react"; 
import "../assets/css/ViewFirstUser.css";



function ViewFirstUser({id, categoria, nombre, apellido, genero, email, pais, fechaNac, avatar, url, imagen, enlace}){
    return(
        <div className="card-body">
            <div className="text-center">
            <p>{nombre}</p><br/>
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "20.6rem" }} src={imagen} alt="primer usuario" />
            </div>
            <div className="ultiU">
            <h4> Id:</h4> <p>{id}</p> <br/>
            {/*<!-- <p> Categoria: {categoria}</p> -->*/}
            <h4> Apellido:</h4> <p>{apellido}</p><br/>
            <h4> Genero: </h4> <p>{genero}</p><br/>
            <h4> Email: </h4> <p>{email}</p><br/>
            <h4> Pais: </h4> <p>{pais}</p> <br/>
            <h4> Fecha de Nacimiento: </h4> <p>{fechaNac}</p> <br/>
            <h4> Pais: </h4><p> {pais}</p> <br/>
            </div>
        </div>
    )
}

export default ViewFirstUser;