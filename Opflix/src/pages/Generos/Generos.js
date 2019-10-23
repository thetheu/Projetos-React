import React, { Component } from "react";
import NavAdm from '../../components/NavAdm';
import Rodape from '../../components/Rodape.js';
import { Link } from "react-router-dom";




export default class Generos extends Component{

    constructor() {
        super();
        this.state={ 
            listaGenero: [],
            idCategoriaNavigation: [],

            categoria: "",
            idCategoria: ""
        }
    }


    componentDidMount() {
        this.listarGeneros();
    }


    listarGeneros = () =>{
        fetch('http://localhost:5000/api/categoria', {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-OpFlix') },
            "Content-Type": "application/json",
            "Accept" : "application/json"
        })
            .then(response => response.json())
            .then(data => this.setState({ listaGenero: data}))
            .catch(err => console.log(err))
    }


    render(){
        return(
            <div>
                <NavAdm/>
                <section>
                    <h3 style={{color:"white"}}>Generos</h3>
                    <table style={{color:"white"}}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
 
                                <tbody>
                                    {this.state.listaGenero.map(element => {
                                        return(
                                            <tr key={element.idCategoria}>
                                                <td>{element.idCategoria}</td>
                                                <td>{element.nome}</td>
                                            </tr>
                                        )
                                    })}                                   
                                </tbody> 
                    </table>
                </section>

                <Rodape/>
            </div>
        )
    }
}