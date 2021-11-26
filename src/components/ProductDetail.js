import React, { useState, useEffect } from "react";
import ViewProductDetail from "./ViewProductDetail";

function ProductDetail(){
    
    
    let [product, setProduct] = useState({
        
        nombre:"No hay productos",
        url: "/" ,
        
    })
    
    
    

    useEffect(() => {
        fetch("/api/products/:id")
        .then(res => res.json())
        .then(product => {
            setProduct({
                id:data.id,
                nombre:data.nombre,
                precio:data.precio
            })
        })

       
    }, [])

    return (
        <>
            <div className="row">
                {datos.map((dato, i) => 
                    <ViewProductDetail key={i} 
                       
                        nombre={product.data.nombre}
                        
                        
                    /> 
                )}
            </div>
        </>    
    )
}



export default ProductDetail;
