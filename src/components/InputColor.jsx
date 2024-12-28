import colorNames from 'colornames';
import React from 'react'

const InputColor = ({colorValue,setColor,setHex,isDarkText,setDark}) => {
  return (<>
  <form>
    <input type='text' placeholder='Color-value' value={colorValue} onChange={(e)=>{setColor(e.target.value); setHex(colorNames(e.target.value))}} />
    <button type='button' onClick={()=>{setDark(!isDarkText)}} >Toggle text color</button>
  </form>
  </>
  )
}

export default InputColor
