import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import Nav from '../../components/Nav.js';
import Rodape from '../../components/Rodape.js';


import '../../assets/css/HomeAdm.css'

export default class HomeAdm extends Component {

    constructor() {
        super();
        this.state = {
            listaLancamento: [],
            idCategoriaNavigation: [],
            idIdentificacaoNavigation: [],
            idClassificacaoNavigation: [],
            idPlataformaNavigation: [],

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

    listarLancamentos = (event) => {
        fetch("http://localhost:5000/api/filmeSeries", {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') },
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
            .then(respose => respose.json())
            .then(data => this.setState({ listaLancamento: data }))
            .catch(err => console.log(err));
    }


    cadastrarLancamento = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/api/filmeSeries', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('usuario-OpFlix')
        },
            
            body: JSON.stringify({
                titulo: this.state.titulo,
                sinopse: this.state.sinopse,
                tempoDuracao: this.state.tempoDuracao,
                dataLancamento: this.state.dataLancamento,
                idCategoria: this.state.idCategoriaNavigation
            })
        })
            .then(response => this.listarCategoria())
            .catch(erro => console.log(erro));
    }


    tituloLancamento = (event) => {
        this.setState({ titulo: event.target.value });
    }
    dataLancamento = (event) => {
        this.setState({ dataLancamento: event.target.value });
    }
    categoriaLancamento = (event) => {
        this.setState({ idCategoria: Number(event.target.value) });
    }
    identificacaoLancamento = (event) => {
        this.setState({ idIdentificacao: Number(event.target.value) });
    }
    sinopseLancamento = (event) => {
        this.setState({ sinopse: event.target.value });
    }
    tempoDuracaoLancamento = (event) => {
        this.setState({ tempoDuracao: event.target.value });
    }
    veiculoLancamento = (event) => {
        this.setState({ veiculo: event.target.value });
    }
    classificacaoLancamento = (event) => {
        this.setState({ idClassificacao: (Number(event.target.value) === undefined) ? 1 : Number(event.target.value) });
    }
    plataformaLancamento = (event) => {
        this.setState({ idPlataforma: Number(event.target.value) });
    }




    render() {
        return (
            <div>
                <Nav />

                <section>
                    <h3 style={{ color: "white" }}>Lançamentos</h3>
                    <table style={{ color: "white" }}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Titulo</th>
                                <th>Sinopse</th>
                                <th>Tempo Duração</th>
                                <th>Data Lançamento</th>
                                <th>Veiculo</th>
                                <th>Categoria</th>
                                <th>Plataforma</th>
                                <th>Classificação</th>
                                <th>Identificação</th>

                                <tbody>
                                    {this.state.listaLancamento.map(element => {
                                        return (
                                            <tr key={element.idLancamento}>
                                                <td>{element.idLancamento}</td>
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
                            </tr>
                        </thead>
                    </table>
                </section>

                <div className="formulario">
                    <form onSubmit={this.cadastrarLancamento}>
                        <input
                            className="titulo"
                            type="text"
                            placeholder="Nome do Lançamento"
                            value={this.state.titulo}
                            onChange={this.tituloLancamento}
                        />
                        <input
                            className="sinopse"
                            type="text"
                            placeholder="Sinopse"
                            value={this.state.sinopse}
                            onChange={this.sinopseLancamento}
                        />
                        <input
                            className="tempoDuracao"
                            type="int"
                            placeholder="Tempo de Duração"
                            value={this.state.tempoDuracao}
                            onChange={this.tempoDuracaoLancamento}
                        />
                        <input
                            className="dataLancamento"
                            type="date"
                            placeholder="Data de Lançamento"
                            value={this.state.dataLancamento}
                            onChange={this.dataLancamento}
                        /> 
                        <input
                            className="categoria"
                            type="int"
                            placeholder="Categoria do Lancamento"
                            value={this.state.idCategoria}
                            onChange={this.idCategoriaNavigation}
                        /> 
                        <input
                            className="veiculo"
                            type="text"
                            placeholder="Veiculo"
                            value={this.state.veiculo}
                            onChange={this.veiculoLancamento}
                        />
                        <input
                            className="classificacao"
                            type="text"
                            placeholder="Classificação"
                            value={this.state.idClassificacao}
                            onChange={this.idClassificacaoNavigation}
                        />
                        <input
                            className="plataforma"
                            type="text"
                            placeholder="Plataforma"
                            value={this.state.idPlataforma}
                            onChange={this.idPlataformaNavigation}
                        />
                        <input
                            className="identificacao"
                            type="text"
                            placeholder="Identificação"
                            value={this.state.idIdentificacao}
                            onChange={this.idIdentificacaoNavigation}
                        />
                        <button className="botao">
                            Cadastrar
                        </button>

                    </form>
                </div>



                <Rodape />
            </div>
        );







        // <div>
        //     <body className='paginaAdministrador'>
        //     <Nav/>

        //     <header className='nav'>
        //         <nav className='navBar'>

        //         </nav>
        //     </header>

        //     <div className='adm'>

        //         <div className='tabelaLançamentos'>
        //             <h2>Lançamentos</h2>

        //             <table className='tabelaLista' style={{color: "white"}}>
        //                 <thead>
        //                     <tr>
        //                         <th>Id</th>
        //                         <th>Titulo</th>
        //                         <th>Sinopse</th>
        //                         <th>Data Lançamento</th>
        //                         <th>Categoria</th>
        //                         <th>Plataforma</th>
        //                         <th>Duração(min)</th>
        //                         <th>Classificação</th>
        //                         <th>Modelo</th>
        //                     </tr>
        //                 </thead>

        //                 <tbody className='tabela'>
        //                     {this.state.listaLancamento.map(element => {
        //                         return (
        //                             <tr key={element.idLancamento}>
        //                                 <td>{element.idLancamento}</td>
        //                                 <td>{element.titulo}</td>
        //                                 <td>{element.sinopse}</td>
        //                                 <td>{element.dataLancamento}</td>
        //                                 <td>{(element.idCategoriaNavigation === undefined) ?
        //                                     'categoria não registrada' : element.idCategoriaNavigation.nome}</td>
        //                                 <td>{(element.idPlataformaNavigation === undefined) ?
        //                                     'plataforma não registrada' : element.idPlataformaNavigation.nome}</td>
        //                                 <td>{element.duracaoMin}</td>
        //                                 <td>{(element.idClassificaoNavigation === undefined) ?
        //                                     'classificação nula' : element.idCategoriaNavigation.idade}</td>
        //                                 <td>{(element.idTipoLancamentoNavigation === undefined) ?
        //                                     'tipo não registrado' : element.idTipoLancamentoNavigation.tipo}</td>
        //                             </tr>
        //                         )
        //                     })}
        //                 </tbody>
        //             </table>
        //         </div>

        //         <div className='cadastroLancamento'>
        //             <h2>Cadastrar Lançamento</h2>
        //             <form style={{color: "white"}}>
        //                 <div>
        //                     <h3>Titulo</h3>
        //                     <input className="titulo" type="text" onChange={this.tituloLancamento} value={this.state.titulo} />

        //                     <h3>Sinopse</h3>
        //                     <input className="sinopse" type="text" onChange={this.sinopseLancamento} value={this.state.sinopse} />

        //                     <h3>Data de lançamento</h3>
        //                     <input className="dataLancamento" type="dateTime" onChange={this.dataLancamento} value={this.state.dataLancamento} />

        //                     <h3>Gênero</h3>
        //                     <select className='genero' onChange={this.categoriaLancamento}>
        //                         <option value='null'>Selecione</option>
        //                         {this.state.idCategoriaNavigation.map(element => {
        //                             return (
        //                                 <option value={element.idCategoria} key={element.idCategoria}>{element.nome}</option>
        //                             )
        //                         })}
        //                     </select>

        //                     <h3>Plataforma</h3>
        //                     <select className='plataforma' onChange={this.plataformaLancamento}>
        //                         <option value='null'>Selecione</option>
        //                         {this.state.idPlataformaNavigation.map(element => {
        //                             return (
        //                                 <option value={element.idPlataforma} key={element.idPlataforma}>{element.nome}</option>
        //                             )
        //                         })}
        //                     </select>

        //                     <h3>Duração em min</h3>
        //                     <input className="duracao" type="number" onChange={this.duracaoMinLancamento} value={this.state.duracaoMin} />

        //                     <h3>Classificação</h3>
        //                     <select className='classificacao' onChange={this.classificacaoLancamento}>
        //                         <option value='null'>Selecione</option>
        //                         {this.state.idClassificacaoNavigation.map(element => {
        //                             return (
        //                                 <option value={element.idClassificacao} key={element.idClassificacao}>{element.idade}</option>
        //                             )
        //                         })}
        //                     </select>

        //                     <h3>Modelo</h3>
        //                     <select className='modelo' onChange={this.tipoLancamento}>
        //                         <option value='null'>Selecione</option>
        //                         {this.state.idTipoLancamentoNavigation.map(element => {
        //                             return (
        //                                 <option value={element.idTipoLancamento} key={element.idTipoLancamento}>{element.tipo}</option>
        //                             )
        //                         })}
        //                     </select>
        //                 </div>

        //                 <button className='botaoCadastrar' onClick={this.cadastrarLancamento}>Cadastrar</button>
        //             </form>
        //         </div>


        //         <div className='tabelaCategorias'>
        //             <h2>Gêneros</h2>

        //             <table className='tabelaGeneros'>
        //                 <thead>
        //                     <tr>
        //                         <th>Id</th>
        //                         <th>Nome</th>
        //                     </tr>
        //                 </thead>

        //                 <tbody className='tabela'>
        //                     {this.state.idCategoriaNavigation.map(element => {
        //                         return (
        //                             <tr key={element.idCategoria}>
        //                                 <td>{element.idCategoria}</td>
        //                                 <td>{element.nome}</td>
        //                             </tr>
        //                         )
        //                     })}
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        // </body>
        //        <Rodape/>
        //     </div>
    }
}
