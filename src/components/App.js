
import React from 'react';
import SideBar from './SideBar';
import Home from './Home.js';
import Marcas from "./Marcas.js"
import ContentRowProducts from'./ContentRowProducts.js';
import NotFound from './NotFound.js';
import Products from "./Products.js"

import Footer from "./Footer.js";
import Title from "./Title.js";
import Database from "./DataBase.js";


import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
     
      	<div id="wrapper">
          <SideBar/>
              
        <Routes>
      	<Route path ='/home' element={<Home/>}/>
        <Route path="/marcas" element={<Marcas/>} />
        
        <Route path ="/products" element={<Products/>}/>
        
        <Route path= "*" element = {<NotFound/>}/>

        </Routes>
        
        </div>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

