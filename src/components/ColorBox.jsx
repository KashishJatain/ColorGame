import React from 'react'

const ColorBox = ({colorValue,hexValue,isDarkText}) => {

  return (
    <>
    <div className='colBox' style={{backgroundColor:colorValue?colorValue:"#fff" , color:isDarkText?"#000":"#fff"}} > 
      <p>{colorValue?colorValue:"Empty Value"}</p>
      <p>{hexValue?hexValue:""}</p>
    </div>
    </>
  )
}

ColorBox.defaultProps={
  colorValue:"Empty Color Value"
}

export default ColorBox
