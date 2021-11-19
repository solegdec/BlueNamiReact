import React from 'react';

import  { useState } from 'react';
import  { useEffect } from 'react';

function SearchProducts(){

	
	
	
    const [products, setProducts] = useState([]);

	
	// Credenciales de API
	
	useEffect(() =>{
		fetch(`http://localhost:8000/api`)
			.then(result => result.json())
			.then(data=>{
			setProducts(data.Search)
            console.log(products)
		})
	},[])


	return(
		<div className="container-fluid">
			{
				
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: </h2>
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 && products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.Id}
														alt={product.Nombre} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{product.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				
			}
		</div>
	)
}

export default SearchProducts;
