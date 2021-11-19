import React, { Component, useEffect, useState } from 'react';
import Info from "./Info.js"
import ProductsList from './ProductsList';

class Products extends Component{

	constructor(){
		super()
		this.state = {
			productsList: []
		}
	}

	componentDidMount(){
		fetch("/api/products")
		.then(res => res.json())
		.then(products => {
			this.setState({productsList: products.data})
			 console.log(products)
		})
	}
	render(){

return(
			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<h1 className="h3 mb-2 text-gray-800">Nuestras Tablas</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
												this.state.productsList.map((product, i)=>{
													return <ProductsList {...product} key={i} />
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

export default Products;