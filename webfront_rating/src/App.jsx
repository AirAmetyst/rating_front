import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import NewsSection from "./components/News_Section.jsx";
import About from "./components/About.jsx";
import Techs from "./components/Techs.jsx";
import Parallax from "./components/Parallax.jsx";
import Step1 from "./components/Step1.jsx";
import Step3 from "./components/Step3.jsx";
import Step2 from "./components/Step2.jsx";
import Footer from "./components/Footer.jsx";
import Step4 from "./components/Step4.jsx";
import ParallaxText from "./components/NewsLine.jsx";
import Contacts from "./components/Contatcs.jsx";


function App() {


  return (
      <div className="justify-center min-w-[300px]">



          <div className= "content">
              <NavBar/>

              <Hero/>
              <div className= "bg-[#C04764]">
                  <ParallaxText baseVelocity={-5}>RATING.</ParallaxText>
                  <ParallaxText baseVelocity={5}>01.09.2023</ParallaxText>

              </div>


          </div>
          <div id = "news" className= "bg-[#FDF63C]">
              <NewsSection/>
          </div>

          <div className={"parallax"}>
              <Parallax children={<About/>}/>
              <Parallax children={<Step1/>}/>
              <Parallax children={<Step2/>}/>
              <Parallax children={<Step3/>}/>
              <Parallax children={<Step4/>}/>
          </div>





          <div className="content">
              <Techs/>
              <Contacts/>



              <Footer/>

          </div>

          <div className="background">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>

      </div>
  )
}

export default App
