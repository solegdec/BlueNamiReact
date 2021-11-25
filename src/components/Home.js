import React from 'react';
import TopBar from './TopBar';
import ContentRowProducts from './ContentRowProducts';
import Products from './Products';
import Footer from './Footer';
import SearchProducts from './SearchProducts';
import MarcasInDb from './Marcas';

import CountProducts from './CountProducts';
import ViewCount from './ViewCount';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <CountProducts/>
                    <SearchProducts/>
                    <ContentRowProducts/>
                    <Products/>
                    <MarcasInDb/>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;