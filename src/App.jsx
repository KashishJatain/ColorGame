import Navbar from "./components/Navbar"
import ColorBox from "./components/ColorBox"
import InputColor from "./components/InputColor"
import { useState , useEffect} from "react";


function App() {
  const [colorValue,setColor]=useState('');
  const [hexValue,setHex]=useState('');
  const [isDarkText,setDark]=useState(true);

  return (
    <>
    <Navbar/>
    <div className="container" >
      <ColorBox colorValue={colorValue}  hexValue={hexValue} isDarkText={isDarkText} />
      <InputColor colorValue={colorValue} setColor={setColor} setHex={setHex} isDarkText={isDarkText} setDark={setDark} />
    </div>
    </>
  )
}

export default App
