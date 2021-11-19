import React from 'react';
import nf from '../assets/images/nf.png';

function NotFound(){
    return(
        <div >
            
            <div className="text-center">
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 100 +'rem'}} src={nf} alt=" not found "/>
            </div>  
        </div>
    )
}

export default NotFound;