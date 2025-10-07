import { useState } from 'react';
import './App.css';
import Background from "./componentes/Background/Background";
import Navbar from "./componentes/Navbar/Navbar";
import Hero from "./componentes/Hero/Hero";
import Features from "./componentes/Features/Features";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  let heroData = [
    { text1: "Electric", text2: "Vehicles" },
    { text1: "Sustainable", text2: "Future" },
    { text1: "Modern", text2: "Technology" },
    { text1: "Eco", text2: "Friendly" },
  ]
  const[heroCount, setHeroCount] = useState(0);
  const[playStatus, setPlayStatus] = useState(true);

  return (
    <div className="container-fluid p-0">
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero 
        heroData={heroData} 
        setHeroCount={setHeroCount} 
        heroCount={heroCount} 
        setPlayStatus={setPlayStatus} 
        playStatus={playStatus}
      />
      <div id="features">
        <Features />
      </div>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">Simple Website - Created with React and Bootstrap</p>
      </footer>
    </div>
  )
};

export default App;