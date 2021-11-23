import React, {useState} from "react";
import PropTypes from "prop-types";


function Info({nombre, descripcion, precio, marca, unidades}) {
    return (
        <tbody>
            <tr>
                <td>{nombre}</td>
                <td>{descripcion}</td>
                <td>{precio}</td>
                <td>{marca}</td>
                <td>{unidades}</td>
            </tr>
        </tbody>
    )
}

Info.propTypes ={
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    marca: PropTypes.string.isRequired,
    unidades: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
   
}
Info.defaultProps = {
    nombre: "Sin nombre",
    descripcion: "Sin descripción",
    precio: "Sin Precio",
    marca: "Sin Marca",
    unidades:"Sin Unidades"

}


export default Info;