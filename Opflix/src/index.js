import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//paginas
import App from './App';
import Cadastro from '../src/pages/Cadastro/Cadastro.js';
import Home from '../src/pages/Home/Home.js';
import Genero from '../src/pages/Generos/Generos.js';

import * as serviceWorker from './serviceWorker';

//rotas
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import HomeAdm from './pages/HomeAdm/HomeAdm';

const RotaPrivada = ({ component: Component }) => (
    <Route
        render={props =>
            localStorage.getItem("usuario-OpFlix") !== null ?
                (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/Login", state: { from: props.location } }}
                    />
                )
        }
    />
)


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/Cadastro' component={Cadastro} />
                <RotaPrivada path='/Home' component={Home}/>
                <RotaPrivada path='/HomeAdm' component={HomeAdm} />
                <RotaPrivada path='/Genero' component={Genero}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
