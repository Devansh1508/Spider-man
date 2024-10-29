import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import spidey from "./assets/spidey.png"


function App() {
  const [count, setCount] = useState(0);
  const [isHover, setIsHover] = useState(false)

  const styleSpiderManImg = {
    zIndex: isHover ?3:-1
  };

  return (
    <>
      <div className="home">
        <Navbar />
        <Title/>
        <div className="content">
          <img src={spidey} className="spidey" alt="" srcset="" style={styleSpiderManImg} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
