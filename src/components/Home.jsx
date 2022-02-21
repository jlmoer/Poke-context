import { useState, useEffect } from 'react';

function Home() {
    const [pokemon, setPokemon] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then((res) => res.json())
            .then((res) => {
                setPokemon(res)
                setIsLoaded(true)
            })
    }, [])

    if (isLoaded === false) {
        console.log("load");
        return <h3>Loading...</h3>
    }

    return (
        <div>
            <h1>HOME</h1>
            <p>Name: {pokemon.name}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type:</p>
            <ul>
                {pokemon.types.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home;