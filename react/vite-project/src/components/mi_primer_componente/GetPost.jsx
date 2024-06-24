import { useEffect, useState } from "react";

export default function GetPost() {
    const [data, setData] = useState((Object))
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => 
            response.json()
        ).then((data) => console.log(data)) 
    }, [])

    return (
        <>
        {
            !data ? <> loading... </> : <>
            <h2>object title:{data.title}
                id: {data.id}
            </h2>
            <p>body: {data.body}</p>

            </>
        }
        </>
    )
}

