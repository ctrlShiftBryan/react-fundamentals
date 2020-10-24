// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div style={{ background: 'lightblue'}} className="box box--small">small lightblue box</div>
const mediumBox = <div style={{ background: 'pink'}} className="box box--medium">medium pink box</div>
const largeBox = <div style={{ background: 'orange'}} className="box box--large">large orange box</div>

// function Box1( style, className, ...otherProps) {

// return (<div style={{...style, fontStyle: 'italic'}} className={className} {...otherProps}>) 
// }
const Box = ({style, size = 'small', ...otherProps}) => { 

  console.log(otherProps)
  return <div 
      className={`box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
/>}


function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box size="medium" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>    
    </div>
  )
}

export default App
