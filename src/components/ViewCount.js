import React from "react";
import "../assets/css/ViewCount.css";

function ViewCount( {titulo, cantidad, colorBorder}) {
    
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${colorBorder} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${colorBorder} text-uppercase mb-1`}>
                                {titulo}
							</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {cantidad}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ViewCount;