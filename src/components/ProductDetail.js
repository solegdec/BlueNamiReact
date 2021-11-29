import React, { useState, useEffect } from "react";
import ViewProductDetail from "./ViewProductDetail";
import image from "../assets/images/tablaVector.png"

function ProductDetail(){    
    let [product, setProduct] = useState({
        imagen: image,
        nombre:"No hay productos",
        url: "/" ,
    })
    
    useEffect(()=>{
        fetch("/api/products/:id")
        .then(res => res.json())
        .then(info => {
            setProduct({
                id:info.data.id,
                nombre:info.data.nombre,
                precio:info.data.precio,
                imagen:info.data.foto,
                url: info.data.url
            })
        })       
    }, [])

    return (

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Detail:
                    </h6>
                </div>
                <ViewProductDetail
                    imagen={product.imagen}
                    nombre={product.nombre}
                    precio={product.precio}
                    id={product.id} 
                    url={product.url} 
                />
            </div>
        </div>


    )
}



export default ProductDetail;
