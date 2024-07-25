import React from "react"

// function Greet(){
//     return <h1>hello abhi</h1>
// }

const Greet=({name,place})=>{
    // const {name,place}=props
    return(
        <div>
          <h1>function component {name} place {place}</h1>
           {/* {props.children} */}
        </div>
       
    ) 
}

export default Greet;