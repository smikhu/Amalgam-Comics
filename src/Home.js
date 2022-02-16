import './App.css';
import { useState } from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Footer from './components/Footer';
import Title from './components/Title';


function Home() {

const [characters, setCharacters] = useState([])

const [heroes, setHeroes] = useState([])

const [villains, setVillains] = useState([])

return(
  <div>
    <Title />
    

    <div className="pages">

      
        <Link to="/page1">
          <div className="page">
            1
          </div>
          </Link>
      

      
        <Link to="/page2" >
          <div className="page">
            2
            </div>
            </Link>
      

      
        <Link to="/page3">
          <div className="page">
            3
            </div>
            </Link>
      

    </div>
    
    
    <Routes>
      <Route path="/" element={<Navigate to="/page1" />} />
      <Route path="/page1" element={ <Page1 characters={characters} setCharacters={setCharacters} /> } />
      <Route path="/page2" element={ <Page2 characters={characters} /> } />
      <Route path="/page3" element={ <Page3 villains={villains} setVillains={setVillains} heroes={heroes} setHeroes={setHeroes} /> } />
    </Routes>
    
    <Footer />
  </div>
)

}


export default Home;
