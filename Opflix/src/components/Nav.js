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
                    
                <Link className="h1" style={{
                    marginLeft: "20px",
                    padding: "10px",
                    textDecoration:"none",
                    fontFamily: 'Fredoka One',
                    color: "white"}}>OPFLIX</Link>

                <Link className="h3a" style={{ marginLeft: "1000px",
                    fontFamily: 'Fredoka One',
                    color: "white",
                    textDecoration:"none",
                    
                    
                }}>Lançamento</Link>

                <Link className="h3b" style={{ marginLeft: "100px",
                    fontFamily: 'Fredoka One',
                    color: 'white',
                    textDecoration:"none"}}>Sair</Link>
                    </div>
            </nav>
    )
}
