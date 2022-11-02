import { useEffect, useState } from "react";


const useRickAndMorty=(counter)=>{
    
    
    const [character, setCharacter] = useState([])
    const [load, setLoad] = useState(false)

    const RickAndMortyAPI=async()=>{
        const req = await fetch(`https://rickandmortyapi.com/api/character/?page=${counter}`)
        const data = await req.json();

        const result = data.results.map(index => {

            return {
                id:index.id,
                name:index.name,
                image:index.image,
                specie: index.species,
                gender: index.gender,
                planet: index.origin.name

            }
        })

       

        return result
    }

    const ResultRickAndMortyAPP=async()=>{

        const data = await RickAndMortyAPI();

        // console.log(data)
        setCharacter(data)
        setLoad(true)
    }

    useEffect(()=>{
        ResultRickAndMortyAPP();
    },[counter])

    return{
        character,
        load
    }
}

export default useRickAndMorty;