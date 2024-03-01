
import { useEffect, useState } from "react"
import Character from "./character";

function CharacterList(){
    const[characters, setCharacters]=useState ([])
    const[loading, setLoading]=useState (true)
    

    useEffect(()=>{
      async function fetchData(){
        const response = await fetch('https://rickandmortyapi.com/api/character?page=2');
        const data = await response.json();
        setLoading(false)
        setCharacters(data.results)
      }
      fetchData()
       
      }, [])
    
    return(
        <div className="container-xxl ">
            {
                loading?( <h1>Loading...</h1>
                ):(
                <div className="row">
            {characters.map((character) =>
          {
          return (
            <div className="" key={character.id}>
           <Character  character={character}/>
           </div>
          )
        })}

            </div>
           ) }
        </div>
    )
}

export default CharacterList