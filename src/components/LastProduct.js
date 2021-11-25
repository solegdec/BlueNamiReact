import React, {useState, useEffect} from "react";
import ViewLastProduct from "./ViewLastProduct";
import image from '../assets/images/tablaVector.png';

function LastProduct() {
    let [product, setProduct] = useState({
        image:"../assets/images/tablaVector.png", 
        nombre:"No se cargo ningun producto",
        url: "/" ,
        
    })

    useEffect(()=>{
        fetch("/api/products")
        .then(res => res.json())
        .then(data => {
            setProduct({    
                nombre: data.meta.lastProducts[0].nombre,
                
                image:"/images/ "+ data.meta.lastProducts[0].foto,
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
                    image={product.image}nombre={product.nombre} url={product.url} 
                />
            </div>
        </div>
    )
}

export default LastProduct;