import React, { Component } from 'react';

import MarcasList from './MarcasList';
import "../assets/css/Marcas.css";


class Marcas extends Component{

	constructor(){
		super()
		this.state = {
			marcasList: []
		}
	}

	componentDidMount(){
		fetch("/api/marcas")
		.then(res => res.json())
		.then(marcas => {
			this.setState({marcasList: marcas.data})
			 console.log(marcas.data)
		})
	}
	render(){

return(
			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<div className="h3mb-2 text-gray-800"><h1>Nuestras Marcas</h1></div>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead className="tablitaMarcas">
											<tr>
											<th>Id</th>
											<th>Marca</th>
											<th>Cantidad de Productos</th>
											<th>Productos</th>

											</tr>
										</thead>
										
										<tbody>
										{ 
												this.state.marcasList.map((marca, i)=>{
													return <MarcasList {...marca} key={i} />
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

export default Marcas;