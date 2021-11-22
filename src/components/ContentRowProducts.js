
import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Tablas",
    valor: 21,
    
}

let amount ={
    titulo: "Marcas",
    color:   "success",
    valor: 79,
    
}

let user = {
    color:   "warning",
    titulo: "usuarios",
    valor: 49,
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