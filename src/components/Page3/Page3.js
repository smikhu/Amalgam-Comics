import Search from '../Search';
import { useState } from 'react';
import "./Page3.css"

function Page3(props) {
    
    const [loading, setLoading] = useState(false)


    const handleFetch2 = (query) => {
        const key = process.env.REACT_APP_API_KEY
        const URL = `https://superheroapi.com/api.php/${key}/search/${query}`
        
        setLoading(true)
        
        fetch(URL)
        .then(response => response.json())
        .then(results => {
          const queryResults = results
          console.log(queryResults)
          props.setHeroes(queryResults.results[0])
          setLoading(false)
        })
      }

      const handleFetch3 = (query) => {
        const key = process.env.REACT_APP_API_KEY
        const URL = `https://superheroapi.com/api.php/${key}/search/${query}`
        
        setLoading(true)
        
        fetch(URL)
        .then(response => response.json())
        .then(results => {
          const queryResults = results
          console.log(queryResults)
          props.setVillains(queryResults.results[0])
          setLoading(false)
        })
      }


    return(
        <div>


        <div className="css-grid">
            <div className="grid grid-item13">
                <h3><span className="seven">13.</span></h3>
                <div className="card">
                    {props.heroes.name ? <h1 className="name2">#{props.heroes.name}</h1> : null}
                    {props.heroes.image?.url ? <img className="img2" src={props.heroes.image?.url}></img> : null}
                </div>
            </div>
            <div className="grid grid-item14">
                <h3>14.</h3>
                <Search handleFetch={handleFetch2} />
            </div>
            <div className="grid grid-item15">
                <h3><span className="red">15. Statistics</span></h3>
                <div className="stats">
                    {props.heroes.powerstats?.combat ? <p><span className="red">combat - </span>{props.heroes.powerstats?.combat}</p> : null}
                    {props.heroes.powerstats?.durability ? <p><span className="red">durability - </span>{props.heroes.powerstats?.durability}</p> : null}
                    {props.heroes.powerstats?.intelligence ? <p><span className="red">intelligence - </span>{props.heroes.powerstats?.intelligence}</p> : null}
                    {props.heroes.powerstats?.power ? <p><span className="red">power - </span>{props.heroes.powerstats?.power}</p> : null}
                    {props.heroes.powerstats?.speed ? <p><span className="red">speed - </span>{props.heroes.powerstats?.speed}</p> : null}
                    {props.heroes.powerstats?.strength ? <p><span className="red">strength - </span>{props.heroes.powerstats?.strength}</p> : null}
                </div>
            </div>
            <div className="grid grid-item16">
            <h3><span className="seven">16.</span></h3>
                <div className="card">
                    {props.villains.name ? <h1 className="name2">#{props.villains.name}</h1> : null} 
                    {props.villains.image?.url ? <img className="img2" src={props.villains.image?.url}></img> : null}
                </div>
            </div>
            <div className="grid grid-item17">
                <h3>17.</h3>
                <Search handleFetch={handleFetch3} />
            </div>
            <div className="grid grid-item18">
            <h3><span className="red">18. Statistics</span></h3>
                <div className="stats">
                    {props.villains.powerstats?.combat ? <p><span className="red">combat - </span>{props.villains.powerstats?.combat}</p> : null}
                    {props.villains.powerstats?.durability ? <p><span className="red">durability - </span>{props.villains.powerstats?.durability}</p> : null}
                    {props.villains.powerstats?.intelligence ? <p><span className="red">intelligence - </span>{props.villains.powerstats?.intelligence}</p> : null}
                    {props.villains.powerstats?.power ? <p><span className="red">power - </span>{props.villains.powerstats?.power}</p> : null}
                    {props.villains.powerstats?.speed ? <p><span className="red">speed - </span>{props.villains.powerstats?.speed}</p> : null}
                    {props.villains.powerstats?.strength ? <p><span className="red">strength - </span>{props.villains.powerstats?.strength}</p> : null}
                </div>
            </div>
        </div>

            
            <div>
                {loading ? <h1>Loading</h1> : null}
            </div>
            
        </div>
        
    )
}

export default Page3;