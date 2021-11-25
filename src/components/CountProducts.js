import React, { useState, useEffect } from "react";
import ViewCount from "./ViewCount";

function CountProducts(){
    
    let [products, setProducts] = useState("Sin productos");
    let [users, setUsers] = useState("Sin usuarios");
    let [marcas, setOrders] = useState("Sin marcas")

    let datos = [
        {
            titulo: "Total de Tablas",
            cifra: products,
            colorBorder: "primary",
            icono: "fa-clipboard-list"
        },
        {
            titulo: "Total de Marcas",
            cifra: marcas,
            colorBorder: "success",
            icono: "fa-dollar-sign"
        },
        {
            titulo: "Total de Usuarios",
            cifra: users,
            colorBorder: "warning",
            icono: "fa-user-check"
        }
    ]
    

    useEffect(() => {
        fetch("/api/products")
        .then(resultado => resultado.json())
        .then(products => {
            setProducts(products.meta.count)
        })

        fetch("/api/marcas")
        .then(resultado => resultado.json())
        .then(marcas => {
            setOrders(marcas.meta.count)
        })

        fetch("/api/users")
        .then(resultado => resultado.json())
        .then(users => {
            setUsers(users.count
            )
        })
    }, [])

    return (
        <>
            <div className="row">
                {datos.map((dato, i) => 
                    <ViewCount key={i} 
                        titulo={dato.titulo} 
                        cantidad={dato.cantidad}
                        colorBorder={dato.colorBorder}
                        
                    /> 
                )}
            </div>
        </>    
    )
}



export default CountProducts;