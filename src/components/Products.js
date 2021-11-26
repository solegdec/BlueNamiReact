import React, { Component } from 'react';
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
			
			
			 
		})
		
	}

	render(){
		
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
											<th>Marca</th>
											<th>Unidades</th>
											<th>Foto</th>
											<th>Detalle</th>

											</tr>
										</thead>
										
										
										<tbody>
											
											{this.state.productsList.map((product, i)=>{
													return <ProductsList 
														id={product.id}
														nombre={product.nombre}
														descripcion={product.descripcion}
														precio={product.precio}
														marca={product.marca_id}
														unidades={product.unidades}
														foto={product.foto}
														url={product.url}

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