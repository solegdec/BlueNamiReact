import React, {useState, useEffect} from "react";
import ViewFirstUser from "./ViewFirstUser";
import image from "../assets/images/avatarDefault.jpeg"


function FirstUser() {
    let [user, setUser] = useState({
        imagen:image,
        nombre:"No hay usuarios",   
        categoria: "Esto no te lo mostrare porque es informacion sensible!"
    })

    useEffect(()=>{
        fetch("/api/users/1")
        .then(res => res.json())
        .then(info => {
            setUser({    
                id:info.data.id,
                //categoria: info.data.categoria.categoria,
                nombre: info.data.nombre,
                apellido: info.data.apellido,
                genero: info.data.genero,
                email: info.data.email,
                pais: info.data.pais,
                fechaNac: info.data.fechaNac,
                imagen: info.avatar
            })
        })       
    },[])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Nuestro primer usuario!
                    </h6>
                </div>
                
                <ViewFirstUser 
                    id={user.id}
                    categoria={user.categoria}
                    nombre={user.nombre}
                    apellido={user.apellido}
                    genero={user.genero}
                    email={user.email}
                    pais={user.pais}
                    fechaNac={user.fechaNac}
                    avatar={user.avatar}
                    url={user.url}
                    imagen={user.imagen}
                    enlace={user.enlace}
                    
                    />

               


            </div>
        </div>
    )
}

export default FirstUser;