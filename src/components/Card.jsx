export const Card=({character})=>{

    return character.map((index)=>{
        return <div key={index.id} className = "card">
             <h2>{index.name}</h2>
        <img src={index.image} alt="" />
        <h3>Specie: <span>{index.specie}</span></h3>
        <h3>Gender: <span>{index.gender}</span></h3>
        <h3>Planet: <span>{index.planet}</span></h3>
        </div>
    
    })

}

// export default Card