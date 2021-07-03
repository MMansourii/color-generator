import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert,setAlert] = useState(false);
  const background = rgb.join(',');
  // change rgb to hex
  // const hex = rgbToHex(...rgb);
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setAlert(false);
    },3000);
   return ()=> clearTimeout(timeOut);
  },[alert])
  const hexValue = `#${hexColor}`;
  return <article 
        onClick={()=>{
          setAlert(true)
          navigator.clipboard.writeText(hexValue);
          }}
        className={`color ${index > 10  && 'color-light'}`} 
        style={{backgroundColor : `rgb(${background})`}} >
      <p className='percent-value text' >{weight}%</p>
      <p className='color-value text' >{hexValue}</p>
      {alert && <p className='alert'>Copied to clip board</p>}
     </article>
}

export default SingleColor
