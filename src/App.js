import React,{useState} from "react";
import Header from "./components/Head/Header.js";
import Hero from "./components/Hero/Hero.js";
import Paredu from "./components/Paredu/Paredu.js";
import Hirate from "./components/Hirate/Hirate.js";
import Mapside from "./components/Mapside/Mapside.js";
import Prefoot from "./components/Prefoot/Prefoot.js";
import Footer from "./components/Foot/Footer.js";






function App () {
  return( 
    <div>
      <Header/>
      <Hero/>
      <Paredu/>
      <Hirate/>  
      <Mapside/>
      <Prefoot/>
      <Footer/>
  </div>
  )
 
}

export default App