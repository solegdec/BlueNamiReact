import React, {useState, useEffect} from "react";
import ViewLastProduct from "./ViewLastProduct";


function LastProduct() {
    let [product, setProduct] = useState({
        image:'../assets/images/tablaVector.png',
        nombre:"No hay productos",
        url: "/" ,
        
    })

    useEffect(()=>{
        fetch("/api/products")
        .then(res => res.json())
        .then(data => {
            setProduct({    
                id:data.meta.lastProducts[0].id,
                nombre: data.meta.lastProducts[0].nombre,
                precio: data.meta.lastProducts[0].precio,
                imagen: "../assets/images/"+data.meta.lastProducts[0].foto,
                url: "/products/"+ data.meta.lastProducts[0].id,
               
            })

        })
        
    },[])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Ultima Tabla que cargamos:
                    </h6>
                </div>
                <ViewLastProduct 
                    imagen={product.imagen}nombre={product.nombre}precio={product.precio}id={product.id} url={product.url} 
                />
            </div>
        </div>
    )
}

export default LastProduct;