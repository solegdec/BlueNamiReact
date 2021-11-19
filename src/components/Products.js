import React, { Component, useEffect, useState } from 'react';
import Info from "./Info.js"
import ProductsList from './ProductsList';

let datos = [
    {
        nombre: "Ninguna información",
        descripcion:"Ninguna información",
        precio:"$0",
        marca: ["Ninguna información"],
        colores:["Ninguna infomación"],
        unidades: 0
    }
]
function Products (){
	
	let [products,setProducts]=useState(datos);
	useEffect(()=>{
		fetch("http://localhost:8000/api")
		.then(res => res.json())
		.then(data => {
			let array=data.data
			setProducts(array)
		}
			
		)},[])

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
											<th>Descripcion</th>
											<th>Nombre</th>
												
												<th>Precio</th>
												<th>Marca</th>
												<th>Unidades</th>
												
											</tr>
										</thead>
										<tfoot>
											<tr>
											<th>Descripcion</th>
												<th>Nombre</th>
												
												<th>Precio</th>
												<th>Marca</th>
												<th>Unidades</th>
												
												
											</tr>
										</tfoot>
										<tbody>
											{products.map((dato,i)=>

												<Info key={i} 
												descripcion= {dato.descripcion}
													nombre= {dato.nombre}
													
													precio={dato.precio}
													marca= {dato.marca.marca}
													unidades= {dato.unidades}
												/>
											)}
										</tbody>
									</table>
								</div>
							</div>
						</div>            
			</React.Fragment>
		)
	}

export default Products;