import "../assets/css/MarcasList.css";

function MarcasList(props){

    return(
        <>
            <tr className="tablitaList">
                <td className="idPro">{props.id}</td>
                <td className="marca">{props.marca}</td>
                
               
            </tr>
        </>
    )
}

export default MarcasList;