import "../assets/css/MarcasList.css";

function MarcasList(props){

    return(
        <>
            <tr className="tablitaList">
                <td className="idPro">{props.id}</td>
                <td className="marca">{props.marca}</td>
                <td className="marca">{props.productos.length}</td>
                <td>
                    <ul>
                        {props.productos.map((producto, i) => 
                        <li key={i}>
                            <span key={i} > 
                                {producto.nombre} 
                                <img style={{ width: "3rem" }} src={"/img/"+producto.foto} alt=""></img>
                            </span>
                        </li> 
                        )}
                    </ul>
                </td>
                
               
            </tr>
        </>
    )
}

export default MarcasList;