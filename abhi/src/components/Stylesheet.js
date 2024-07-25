import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
  let className=props.primary ? 'primary' : ''
  return (
    <div>
     <h2 className={`${className} font-xl`}>Hello World</h2>
    </div>
  )
}

export default Stylesheet
