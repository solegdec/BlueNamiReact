import React from 'react';
import SideBar from './SideBar';
import Home from './Home.js';
import Marcas from "./Marcas.js"
import NotFound from './NotFound.js';
import Products from "./Products.js";
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import SearchProducts from './SearchProducts';
import Users from './Users';
import ViewProductDetail from "./ViewProductDetail";





function App() {
  return (
    <React.Fragment>
      
        <BrowserRouter>
     
      	<div id="wrapper">
        
        <SideBar/>
           
        <Routes>
        <Route path ='/' element={<Home/>}/>
      	<Route path ='/home' element={<Home/>}/>
        <Route path="/marcas" element={<Marcas/>} />
        <Route path="/buscar" element={<SearchProducts/>} />
        <Route path ="/products" element={<Products/>}/>
        <Route path ="/users" element={<Users/>}/>
        <Route path ="/products/:id" element={<ViewProductDetail/>}/>
        <Route path= "*" element = {<NotFound/>}/>


        </Routes>

       
        </div>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

