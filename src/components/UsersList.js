

function UsersList(props){

    return(
        <>
            <tr >
                <td>{props.id}</td>
                <td class="nombreU">{props.nombre}</td>
                <td class="apellidoU">{props.apellido}</td>
                <td class="mailU">{props.email}</td>
                <td class="fNU">{props.fechaNac}</td>
                <td class="paisU">{props.pais}</td>
                <td class="generoU">{props.genero}</td>
                <td><img style={{ width: "10rem" }} src={"/img/avatars/" + props.avatar} alt=""></img></td>

    
            </tr>
        </>
    )
}

export default UsersList;