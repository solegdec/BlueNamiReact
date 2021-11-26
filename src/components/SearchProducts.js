import React from 'react';

import  { useState } from 'react';
import  { useEffect } from 'react';

function SearchProducts(){

	
	
	
    const [products, setProducts] = useState([]);

	
	// Credenciales de API
	
	useEffect(() =>{
		fetch(`/api/`)
			.then(result => result.json())
			.then(data=>{
			setProducts(data.search)
            console.log(data)
		})
	},)


	return(
		<div className="container-fluid">
			{
				
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar Tablas por Nombre:</label>
									
									<input type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Tablas: </h2>
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 && products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.nombre}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.id}
														alt={product.nombre} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{product.marca}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">Ups.... no encontramos esa tabla</div>}
				</>
				
			}
		</div>
	)
}

export default SearchProducts;
