import React, { Component } from 'react';
import "../src/assets/css/App.css"
import imagem from '../src/assets/img/Popcorn.jpg'

import Axios from 'axios';


import "../src/assets/fontes/banco.ttf";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      senha: "",
      erro: ""
    }
  }

  mudarEstadoEmail = (event) => {
    this.setState({ email: event.target.value })
    console.log(this.state.email);
  }

  mudarEstadoSenha = (event) => {
    this.setState({ senha: event.target.value })
    console.log(this.state.senha);
    
  }

  efetuarLogin = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:5000/api/login", {
      Email: this.state.email,
      Senha: this.state.senha,
    })
      .then(data => {
        console.log("olá")
        if (data.status == 200) {
          // console.log(data.data.token)
          localStorage.setItem("usuario-opflix", data.data.token);
          this.props.history.push('/Home');
        } else {
          console.log("Errou!");
        }
      })
      .catch(erro => {
        console.log("oi")
        this.setState({ erro: "Usuario ou senha inválida" });
        console.log(erro)
      })
  }

  render() {

    return (
      <div>
        <div style={{height: "700px"}}>
        <img src={imagem} style={{ width: '1440px', height: '765px', filter: 'blur(5px)', position: 'relative', opacity: '0.90' }} />
        </div>


        <div className="bla">
          <h1>OPFLIX</h1>
          {/* style={{fontFamily: 'banco'}} */}
        </div>

        <form >
        <div className="vid-container">
          <div className="inner-container">
            <div className="box">
              <h1></h1>
              <input 
              placeholder="email"
              type="text" 
              name="username"
              id="login__email"
              onChange={this.mudarEstadoEmail}
              />
              <input 
              placeholder="passoword"
              type="password" 
              name="password"
              id="login__password"
              onChange={this.mudarEstadoSenha}
              />
              <button onClick={this.efetuarLogin}>Login</button>
              <p>Cadastre-se <span>Sign Up</span></p>
            </div>
          </div>
        </div>
      </form>
      </div>
    )
  }
}