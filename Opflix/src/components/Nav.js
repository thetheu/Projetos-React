import React from "react";
import { Link } from 'react-router-dom';


export default function Rodape(){
    return(
            <nav>
                <div style={{
                    backgroundColor: "rgba(255, 255, 255, 0.13)",
                    margin:"20px 0px",
                    marginLeft: "20px",
                    marginRight: "20px",
                    borderRadius: "50px",
                    padding: "10px"}}>
                    
                <a className="h1" 
                    href="/Home"
                    style={{
                    marginLeft: "20px",
                    padding: "10px",
                    textDecoration:"none",
                    fontFamily: "Fredoka One, cursive",
                    fontSize: "30px",
                    color: "yellow",
                    webkitTextStrokeWidth: "1px",
                    webkitTextStrokeColor: "red"
                    }}>OPFLIX</a>

                <a className="h3a" 
                     href="/Home"
                    style={{ marginLeft: "900px",
                    fontFamily: 'Fredoka One',
                    color: "white",
                    textDecoration:"none",
                }}>Lançamento</a>

                <a className="h3b" 
                     href="/"
                    style={{ marginLeft: "100px",
                    fontFamily: 'Fredoka One',
                    color: 'white',
                    textDecoration:"none"}}>Sair</a>
                    </div>
            </nav>
    )
}
