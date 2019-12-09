import React, { Component } from 'react';
import { Text, } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import Rodape from "../../components/Rodape";
import NavAdm from "../../components/NavAdm";


class Localizacao extends Component {
    constructor() {
        super();
        this.state = {
            localizacoes: [],
        }
    }

    componentDidMount() {
        this.trazerLocalizacao();
    }

    trazerLocalizacao() {
        fetch("http://192.168.7.115:5000/api/localizacoes", {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-OpFlix') },
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
            .then(respose => respose.json())
            .then(data => this.setState({ localizacoes: data }))
            .catch(err => console.log(err));
    }






    displayMarkers = () => {
        return this.state.localizacoes.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log(store)} />
        })
    }

    render() {
        return (
            <div>
                
            <NavAdm/>

            <h3 style={{  color: "white", textAlign: "center", marginTop: "50px", fontFamily: "Fredoka One, cursive", fontSize: "30px"}}>Localizações</h3>
            <Map
                google={this.props.google}
                zoom={3}
                style={mapStyles}
                initialCenter={{ lat: -8.5464085, lng: -53.4404716 }}
                >
                {this.displayMarkers()}
            </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
})(Localizacao);

const mapStyles = {
    width: '80%',
    height: '80%',
    top: 100,
    left: 150,
    borderRadius: "3%"
};