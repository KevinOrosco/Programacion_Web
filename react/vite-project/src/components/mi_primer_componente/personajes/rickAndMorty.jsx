import { useEffect, useState } from "react";
import "../index.css" 
import * as ReactDOM from "react-dom";

export default function RickYMorty() {
    const [personajes, setData] = useState()
    useEffect(() =>{
        fetch("https://rickandmortyapi.com/api/character").then((response) => 
            response.json()
        ).then((personajes) => setData(personajes.results)) 
    }, [])

    return (
        <>
        {
            !personajes ? <> loading... </> : <> <div className="grilla_3x3">
            {personajes.map((personaje, index) => (
            <div key={index} className="bordes">
                
                <h2>Nombre: {personaje.name} </h2>
                <img src= {personaje.image} />
                <p>Estado: {personaje.status}</p>
                <p>Especie: {personaje.species} </p>
                <p>Genero: {personaje.gender}</p>
                
            </div>
        
            ))}
            </div>
            </>
        }
        </>
    )
}
