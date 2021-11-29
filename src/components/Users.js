import React, { Component } from 'react';
import UsersList from './UsersList.js';

class Users extends Component{

	constructor(){
		super()
		this.state = {
			usersList: []
		}
	}

	componentDidMount(){
		fetch("/api/users")
		.then(res => res.json())
		.then(users => {
			this.setState({usersList: users.users})
			
			
			 
		})
		
	}

	render(){
		
return(
			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<div className="h3 mb-2 text-gray-800"><h1>Usuarios</h1></div>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead className="encabezado">
											<tr>
											<th>Id</th>
											<th>Nombre</th>
											<th>Apellido</th>
                                            <th>E-mail</th>
											<th>Fecha de Nacimiento</th>
											<th>Pais de Origen</th>
											<th>Genero</th>
											<th>Avatar</th>
											</tr>
										</thead>
										<tbody>
											
											{this.state.usersList.map((user, i)=>{
													return < UsersList 
														id={user.id}
														nombre={user.nombre}
														apellido={user.apellido}
                                                        email={user.email}
														fechaNac={user.fechaNac}
														pais={user.pais}
														genero={user.genero}
                                                        avatar={user.avatar}
														

													 key={i} />
												
												})
											}
										</tbody>
									</table>
								</div>
							</div>
						</div>            
			</React.Fragment>
		)
	}}

export default Users;