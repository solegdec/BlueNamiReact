import React, {useState, useEffect} from "react";
import ViewCountByColours from "./ViewCountByColours";

import "../assets/css/LastProduct.css";

function CountByColours() {
    let [colour, setColour] = useState({
        Id:"No hay Productos",
        name:"No hay productos", 
        count:"No hay productos" 
        
    })

    useEffect(()=>{
        fetch("/api/colours")
        .then(res => res.json())
        .then(data => {
            setColour(    
                data.meta.qtyProducts
               
            )
           
        })       
    },[])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        
                    </h6>
                </div>
                { coloursList.map((colour, i) =>
                            <ViewCountByColours 
                            key={i}
                             id={colour.id} 
                             name={colour.name} 
                             count={colour.count} />)
                        }
                
                
            </div>
        </div>
    )
}

export default CountByColours;