import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Tablas",
    valor: null
    
}

let amount ={
    titulo: "Marcas",
    color:   "success",
    valor: null
    
}

let user = {
    color:   "warning",
    titulo: "Usuarios",
    valor: null,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowProducts(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowProducts;