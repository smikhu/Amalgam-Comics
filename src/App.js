import './App.css';
import {useEffect, useState} from 'react'

// // function App() {

//   const [loading, setLoading] = useState(true)
//   const {image, powerstats, connections, biography} = hero
//   const [hero, setHero] = useState({})
//   // console.log(image)
//   // console.log(powerstats)

//   useEffect(() => {
//     let URL = "https://superheroapi.com/api.php/100671169219571/search/wolverine"
//     fetch(URL)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log("success", json)
//       console.log(json.results[0])
//       setHero(json.results[0])
//       setLoading(false)
//     })

//     .catch(console.error)
//   }, [])

//   return (loading ? <h1>Loading</h1> :
  
//     <div className="App">
//            <h1>{hero.name}</h1>
//            <h6>{biography.aliases}</h6>
//            <h2>{connections['group-affiliation']}</h2>
//            <h3>{powerstats.combat}</h3>
//            <h3>{powerstats.durability}</h3>
//            <h3>{powerstats.intelligence}</h3>
//            <h3>{powerstats.power}</h3>
//            <h3>{powerstats.speed}</h3>
//            <h3>{powerstats.strength}</h3>
//            <h3>{hero.biography['full-name']}</h3>
//            <div>
//              <img src={image.url}></img>
//            </div>
//          </div>
//          )
// }

  // if(!hero) {
  //   return (<div>
  //     <p>loading</p>
  //   </div>)
  // } else {
  //   return (
  //     <div className="App">
  //       {/* <h1>{hero.name}</h1>
  //       <h3>{powerstats.combat}</h3>
  //       <h3>{powerstats.durability}</h3>
  //       <h3>{powerstats.intelligence}</h3>
  //       <h3>{powerstats.power}</h3>
  //       <h3>{powerstats.speed}</h3>
  //       <h3>{powerstats.strength}</h3>
  //       <div>
  //         <img src={image.url}></img>
  //       </div> */}
  //     </div>
  //   );
  // }





function App() {

  const [characters, setCharacters] = useState([])
  const [userInput, setUserInput] = useState("")


  const [loading, setLoading] = useState(false)
  
  
  const handleFetch = (query) => {
    const key = process.env.REACT_APP_API_KEY
    const URL = `https://superheroapi.com/api.php/${key}/search/${query}`
    
    // only fetch if the query value is defined
    setLoading(true)
    
    fetch(URL)
    .then(response => response.json())
    .then(results => {
      const queryResults = results
      console.log(queryResults)
      setCharacters([queryResults.results[0]])
      setLoading(false)
    })
  }
  
  const handleChange = (e) => { // search comp
    // console.log(e.target.value)
    setUserInput(e.target.value)
  }
  
  const handleSubmit = (e) => { // app comp passed down to search comp
    e.preventDefault()
    // console.log(e.target)
    handleFetch(userInput)
  }
  
  
  // useEffect(() => {
    //   handleFetch(userInput)
    // }, [])
    
    
    
    
    const results = characters && characters.map((character, idx) => { //results comp
      const {image, powerstats, connections, biography} = character
      return (
        
        <div className="App">
           <h1>{character.name}</h1>
           <h6>{biography.aliases}</h6>
           <h2>{connections&&connections['group-affiliation']}</h2>
           <h3>{powerstats.combat}</h3>
           <h3>{powerstats.durability}</h3>   
           <h3>{powerstats.intelligence}</h3>
           <h3>{powerstats.power}</h3>
           <h3>{powerstats.speed}</h3>
           <h3>{powerstats.strength}</h3>
           <h3>{character.biography['full-name']}</h3>
           <div>
             <img src={image.url}></img>
           </div>
         </div>
         )
})



return (
  <div>
    <h1>Characters</h1>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Character" onChange={handleChange} value={userInput}/>
        <input type="submit" value="Search"/>
      </form>
    </div>
    <div>
      {loading ? <h1>Loading</h1> : null}
      {results}
    </div>
  </div>
)
  
}



export default App;
