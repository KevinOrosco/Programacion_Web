import { useEffect, useState } from "react";

export default function RickYMorty() {
    const [data, setData] = useState((Object))
    useEffect(() =>{
        fetch("https://rickandmortyapi.com/api/character").then((response) => 
            response.json()
        ).then((data) => setData(data.results)) 
    }, [])

    return (
        <>
        {
            !data ? <> loading... </> : <>
            <h2>name:{data.name}
                id: {data.id}
            </h2>
            <div>
                image:{data.image}
            </div>
            

            </>
        }
        </>
    )
}
