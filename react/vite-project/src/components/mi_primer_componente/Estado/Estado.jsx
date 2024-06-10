//hooks -> useState
import { useEffect, useState } from "react";

//camalcase es la manera de escribir en la cual cada palabra arranca coon Mayuscula

//

export const Estado = () => {
    const [contador, setContador] = useState(0)
    const handleClick = () => {
        setContador(contador + 1)
    }
    //El useEffect se va actualizar la cantidad de veces que las dependencias se actualicen.
    //Si no le pasan dependencias se ejecutara solo al principio de la app
    //En el primer render
    //Si no se le pasa el array de dependencia, siempre se va ejecutar
    useEffect(() => {
        console.log("El contador se ha actualizado");
    }, [contador])

    const arrayPersonajes = [

        {
            name:"Rick",
            lastname:"Sanchez",
            planet: "Earth",
            img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            name:"Morty",
            lastname:"Smith",
            planet:"Earth",
            img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        }
    ]

    return <>
    
    <div>
        {   //Cuando despues de la funcion flecha hay un parentesis significa que el return es implicito
            arrayPersonajes.map((item, index) => (
                <>
                    <h2>Full name: {item.name} {item.lastname}</h2>
                    <p>Planet: {item.planet}</p>
                    <img src={item.img} alt="rick and morty" />
                </>
            ))
        }
    </div>
      <button onClick={handleClick}>aumentar</button>
      <p>{contador}</p>
    </>
};