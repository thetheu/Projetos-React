import React, { Component } from 'react';
import "../../assets/css/Cadastro.css"
import imagem2 from '../../assets/img/popcorn-background-cinema-concept_23-2148115445.jpg'
// import "../src/assets/fontes/banco.ttf";

export default class Cadastro extends Component {
  constructor(){
    super();
    this.state = {
      nome: "",
      email: "",
      senha: ""
    }
  }


  render() {
    return (
      <div>
        <img src={imagem2} style={{ width: '1430px', height: '770px', filter: 'blur(5px)', position: 'relative', border: '1px solid red'}} />

        <div className="bla">
          <h1
            style={{marginTop: "-75px"}}
          >OPFLIX</h1>
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
              <button onClick={this.cadastrarUsuarios}>Cadastre-se</button>

            </div>
          </div>
        </div>
      </form>



      </div>
    )
  }
}

