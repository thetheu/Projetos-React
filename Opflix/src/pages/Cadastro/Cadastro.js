import React, { Component } from 'react';
import "../../assets/css/Cadastro.css"
import imagem2 from '../../assets/img/popcorn-background-cinema-concept_23-2148115445.jpg'
// import "../src/assets/fontes/banco.ttf";

export default class Cadastro extends Component {

  render() {

    return (
      <div>
        <img src={imagem2} style={{ width: '1440px', height: '770px', filter: 'blur(5px)', position: 'relative'}} />

        <div className="bla">
          <h1
          //  style={{fontFamily: 'banco'}}
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

