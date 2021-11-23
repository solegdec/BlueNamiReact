

function UsersList(props){

    return(
        <>
            <tr >
                <td>{props.id}</td>
                <td >{props.nombre}</td>
                <td>{props.apellido}</td>
                <td >{props.email}</td>
                <td >{props.fechaNac}</td>
                <td >{props.pais}</td>
                <td>{props.genero}</td>
                
                <td>{props.avatar}</td>

    
            </tr>
        </>
    )
}

export default UsersList;