

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
                <td><img style={{ width: "10rem" }} src={"/img/avatars/" + props.avatar} alt=""></img></td>

    
            </tr>
        </>
    )
}

export default UsersList;