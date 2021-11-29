import "../assets/css/ProductsList.css";

function ProductsList(props){

    return(
        <>
            <tr className="tablita">
                <td>{props.id}</td>
                <td className="nombre">{props.nombre}</td>
                <td>{props.descripcion}</td>
                <td className="precios"><p>${props.precio}</p></td>
                <td>{props.marca.marca}</td>
                <td>{props.unidades}</td>
                <td><img style={{ width: "10rem" }} src={"/img/" + props.foto} alt=""></img></td>
            
                <td>
                    <ul>
                        {props.colores.map((color, i) => 
                        <li key={i}>
                            <span key={i} > 
                                {color.color} 
                            </span>
                        </li> 
                        )}
                    </ul>
                </td>

    
            </tr>
        </>
    )
}

export default ProductsList;