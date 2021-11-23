import React, { Component, useEffect, useState } from 'react';
import Info from "./Info.js"
import ProductsList from './ProductsList';
import "./Products.css";

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
			
			console.log(products.data)
			 
		})
		
	}

	render(){
		const {
			productsList
		}=this.state
		console.log(productsList)

return(
			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<div className="h3 mb-2 text-gray-800"><h1>Nuestras Tablas</h1></div>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead className="encabezado">
											<tr>
											<th>Id</th>
											<th>Nombre</th>
											<th>Descripcion</th>
											<th>Precio</th>
											<th>Unidades</th>
											</tr>
										</thead>
										
										
										<tbody>
											
											{this.state.productsList.map((product, i)=>{
													return <ProductsList 
														id={product.id}
														nombre={product.nombre}
														descripcion={product.descripcion}
														precio={product.precio}
														
														unidades={product.unidades}
														

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

export default Products;