function ProductsList(props){

    return(
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre}</td>
                <td>{props.descripcion}</td>
                <td>{props.precio}</td>
                
                <td>{props.unidades}</td>
    
            </tr>
        </>
    )
}

export default ProductsList;