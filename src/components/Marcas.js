import React, {Component} from 'react';

import Marcas  from './Marcas';



class MarcasInDb extends Component{
    constructor(){
        super()
        this.state = {
            marcasList: []
        }
    }
    componentDidMount(){
        fetch("/api/marcas")
        .then(res => res.json())
        .then(marcas =>{
            this.setState({marcasList: marcas.data})
            console.log(this.state.marcasList)
        })
    }

    changeColor(){
        let title = document.querySelector("h6")
        title.classList.toggle("bg-secondary");
    }

    render(){

        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 onMouseOver={this.changeColor} onMouseOut={this.changeColor} className="m-0 font-weight-bold text-gray-800">
                                    Marcas Data Base
                                </h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {
                                        this.state.marcasList.map((marca,index)=>{
                                            return  <Marcas  {...marca}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }

}
export default MarcasInDb;