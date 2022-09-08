import React from 'react'
// import rgbToHex from './util';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
 
  const [alert, setAlert] = React.useState(false)
  const rgbValue = rgb.join(',') // it will show the rgb value in number
  console.log(rgbValue)
  //const hex = rgbToHex(...rgb) //we can get from function 
  const hexValue = `#${hexColor}`
  console.log(hexValue)
  React.useEffect(() => {
  const timeout = setTimeout(() => {
    setAlert(false)
    // clearTimeout(() =>setTimeout()) //this will work
    return () => clearTimeout(timeout)
  }, 3000);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgbValue})` }}
      onClick={() => {setAlert(true)
      navigator.clipboard.writeText(hexValue)}}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexValue}</p>
      {alert && <p className='alert'>Copied To ClipBoard</p>}
    </article>
  )
}

export default SingleColor
