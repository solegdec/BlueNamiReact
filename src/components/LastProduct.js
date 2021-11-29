import React, {useState, useEffect} from "react";
import ViewLastProduct from "./ViewLastProduct";
import image from "../assets/images/tablaVector.png";
import "../assets/css/LastProduct.css";

function LastProduct() {
    let [product, setProduct] = useState({
        imagen:image,
        nombre:"No hay productos",  
        colores:["No hay colores"]
    })

    useEffect(()=>{
        fetch("/api/products")
        .then(res => res.json())
        .then(data => {
            setProduct({    
                id:data.meta.lastProducts[0].id,
                nombre: data.meta.lastProducts[0].nombre,
                marca: data.meta.lastProducts[0].marca.marca,
                descripcion: data.meta.lastProducts[0].descripcion,
                precio: data.meta.lastProducts[0].precio,
                unidades: data.meta.lastProducts[0].unidades,
                colores: data.data[data.meta.lastProducts[0].id-1].colours,
                imagen: "/img/"+data.meta.lastProducts[0].foto,
                url: "http://localhost:3000/products/" + data.meta.lastProducts[0].id, 
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
                    colores={product.colores}
                    marca={product.marca} 
                    descripcion={product.descripcion} 
                    unidades={product.unidades}
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

export default LastProduct;