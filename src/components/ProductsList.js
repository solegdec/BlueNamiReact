import "./ProductsList.css";

function ProductsList(props){

    return(
        <>
            <tr className="tablita">
                <td>{props.id}</td>
                <td className="nombre">{props.nombre}</td>
                <td>{props.descripcion}</td>
                <td className="precios"><p>${props.precio}</p></td>
                
                <td>{props.unidades}</td>
    
            </tr>
        </>
    )
}

export default ProductsList;