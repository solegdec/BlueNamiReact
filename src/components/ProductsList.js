import "./ProductsList.css";

function ProductsList(props){

    return(
        <>
            <tr className="tablita">
                <td>{props.id}</td>
                <td className="nombre">{props.nombre}</td>
                <td>{props.descripcion}</td>
                <td className="precios"><p>${props.precio}</p></td>
                <td>{props.marca_id}</td>
                <td>{props.unidades}</td>
                <td>{props.foto}</td>

    
            </tr>
        </>
    )
}

export default ProductsList;