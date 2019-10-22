import React, { Component } from 'react';
import "../../assets/css/Home.css"
import Rodape from "../../components/Rodape";
import Nav from "../../components/Nav";

import { Link } from 'react-router-dom';
import Axios from 'axios';

import destaque from "../../assets/img/retangulo-cinza.jpg";
import teste from "../../assets/img/ThePolitician.jpg";
import teste2 from "../../assets/img/greys.jpg";
import teste3 from "../../assets/img/versace.png";
import teste4 from "../../assets/img/thewalking.jfif";





export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            lista: [

            ],
        }
    }

    listarLancamentos = () =>{
        fetch('http://localhost:5000/api/Categorias')
            .then(response => response.json())
            .then(data => this.setState({lista: data}));
    }

    
    render() {
        return(
            <div>
                <Nav/>
          
            <h3 style={{ textAlign: "center", marginTop: "50px", fontFamily: "Fredoka One, cursive", fontSize: "30px", color: "white"}}>Lançamentos</h3>
            
            <div><img src={destaque} style={{ width: "1000px", height: "500px", justifyContent: "center", marginLeft: "200px", marginTop: "50px", marginBottom: "100px"}}/></div>

            <h2 style={{color: "white", marginLeft: "80px", marginBottom: "10px"}}>Ação</h2>

            <section style={{display: "flex", justifyContent: "space-around"}}>
            <li className="titulo1">
                <a className="colecao1" href="http://localhost:3000/Titulo" style={{color: "white"}}>
                    <img src={teste} style={{ width: "300px", height: "150px", marginBottom: "100px"}}/>
                </a>
            </li>
            <li className="titulo1">
                <a className="colecao1" href="http://localhost:3000/Titulo" style={{color: "white"}}>
                    <img src={teste2} style={{ width: "300px", height: "150px", marginBottom: "100px"}}/>
                </a>
            </li>
            <li className="titulo1">
                <a className="colecao1" href="http://localhost:3000/Titulo" style={{color: "white"}}>
                    <img src={teste3} style={{ width: "300px", height: "150px", marginBottom: "100px"}}/>
                </a>
            </li>
            <li className="titulo1">
                <a className="colecao1" href="http://localhost:3000/Titulo" style={{color: "white"}}>
                    <img src={teste4} style={{ width: "300px", height: "150px", marginBottom: "100px"}}/>
                </a>
            </li>
            </section>

            <Rodape/>
            </div>
        )
    }
}
