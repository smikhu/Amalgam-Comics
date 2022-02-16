import Search from "../Search";
import { useState } from 'react';
import "./Page1.css";

function Page1(props) {
    
    const [loading, setLoading] = useState(false)


    const handleFetch = (query) => {
        const key = process.env.REACT_APP_API_KEY
        const URL = `https://superheroapi.com/api.php/${key}/search/${query}`
        
        setLoading(true)
        
        fetch(URL)
        .then(response => response.json())
        .then(results => {
          const queryResults = results
          console.log(queryResults)
          props.setCharacters(queryResults.results[0])
          setLoading(false)
        })
      }


    return(
        <div>


        <div className="css-grid">
            <div className="grid grid-item1">
                <h3>1.</h3>
            {props.characters.image?.url ? <img className="img" src={props.characters.image?.url}></img> : null}
            </div>
            <div className="grid grid-item2">
                <h3>2. NAME</h3>
            {props.characters.name ? <h1 className="name">#{props.characters.name}</h1> : null}
            </div>
            <div className="grid grid-item3">
                <h3>3. SEARCH</h3>
                <Search handleFetch={handleFetch} />
            </div>
            <div className="grid grid-item4">
                <h3>4.</h3>
            </div>
            <div className="grid grid-item5">
                <h3>5.</h3>
            </div>
            <div className="grid grid-item6">
                <h3>6. RACE</h3>
                <h1 className="race">{props.characters.appearance?.race}</h1>
            </div>
        </div>

            
            <div>
                {loading ? <h1>Loading</h1> : null}
            </div>
            
        </div>
        
    )
}

export default Page1;