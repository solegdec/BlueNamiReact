import React, { Component, useEffect, useState } from 'react';
import Info from "./Info.js"
import MarcasList from './MarcasList';

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
			this.setState([{marcasList: marcas.data}])
			 console.log(marcas)
		})
	}
	render(){

return(
			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<h1 className="h3 mb-2 text-gray-800">Nuestras Marcas</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead>
											<tr>
											<th>Id</th>
											
											<th>Nombre</th>
											<th>Descripcion</th>
												<th>Precio</th>
												<th>Marca</th>
												<th>Unidades</th>
												
											</tr>
										</thead>
										<tfoot>
											<tr>
											<th>Id</th>
											<th>Descripcion</th>
												<th>Nombre</th>
												
												<th>Precio</th>
												<th>Marca</th>
												<th>Unidades</th>
												
												
											</tr>
										</tfoot>
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