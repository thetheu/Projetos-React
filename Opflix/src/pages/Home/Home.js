import React, { Component } from 'react';
import "../../assets/css/Home.css"
import Rodape from "../../components/Rodape";
import Nav from "../../components/Nav";

import { Link } from 'react-router-dom';
import Axios from 'axios';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            listaLancamento: [],
            idCategoriaNavigation: "",
            idIdentificacaoNavigation: "",
            idClassificacaoNavigation: "",
            idPlataformaNavigation: "",

            titulo: "",
            dataLancamento: "",
            sinopse: "",
            tempoDuracao: "",
            veiculo: "",
        }
    }

    componentDidMount() {
        this.listarLancamentos();

    }

    listarLancamentos = () => {
        fetch("http://localhost:5000/api/filmeSeries", {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-OpFlix') },
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
            .then(respose => respose.json())
            .then(data => this.setState({ listaLancamento: data }))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <Nav />

                <h3 style={{ textAlign: "center", marginTop: "50px", fontFamily: "Fredoka One, cursive", fontSize: "30px", color: "white" }}>Lançamentos</h3>

                <section>
                    <table className="tabela">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Sinopse</th>
                                <th>Veiculo</th>
                                <th>Tempo Duração</th>

                                <th>Categoria</th>
                                <th>Plataforma</th>
                                <th>Classificação</th>
                                <th>Identificação</th>
                                    </tr>
                                    </thead>

                                <tbody>
                                    {this.state.listaLancamento.map(element => {
                                        return (
                                            <tr key={element.idLancamento}>
                                                <td>{element.titulo}</td>
                                                <td>{element.sinopse}</td>
                                                <td>{element.veiculo}</td>
                                                <td>{element.tempoDuracao}</td>
                                                <td>{element.dataLancamento}</td>
                                                <td>{(element.idCategoriaNavigation === undefined) ?
                                                 'Categoria não registrada' : element.idCategoriaNavigation.nome}</td>
                                                <td>{(element.idPlataformaNavigation === undefined) ?
                                                 'Plataforma não registrada' : element.idPlataformaNavigation.nome}</td>
                                                <td>{(element.idClassificacaoNavigation === undefined) ?
                                                 'Classificação não registrada' : element.idClassificacaoNavigation.nome}</td>
                                                <td>{(element.idIdentificacaoNavigation === undefined) ?
                                                 'Identificação não registrada' : element.idIdentificacaoNavigation.nome}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                    </table>
                </section>

                <Rodape />
            </div>
        )
    }
}
