import React from "react"; 
import "../assets/css/ViewLastProduct.css";



function ViewCountByColours({id, name, count}){
    return(
        <div className="card-body">
            <div className="text-center">
            <h4> Total de productos por Color</h4>  <br/>
            </div>
            <div className="nmn">
            <h4> Id:</h4><p> {id} </p> <br/>
            <h4> Color:</h4> <p>{name}</p><br/> 
            <h4> Cantidad de productos con el color:</h4> <p>{count}</p> <br/>
            
                  
            </div>      
        </div>
    )
}

export default ViewCountByColours;