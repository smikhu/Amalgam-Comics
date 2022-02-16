import { useState } from 'react'
import "../App.css"


function Search(props) {

    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => { 
        setUserInput(e.target.value)
      }
      
      const handleSubmit = (e) => {
        e.preventDefault()
        props.handleFetch(userInput)
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input className="search-bar"
                type="text" 
                name="query" 
                placeholder="Character" 
                onChange={handleChange} 
                value={userInput}
                
                />
                <br></br>
                <input className="search"
                type="submit"
                value="POW!!!"
                />
            </form>
        </div>
    )
}

export default Search;