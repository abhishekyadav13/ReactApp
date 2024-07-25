import React,{useState} from 'react'
import Child from './Child'

function Parents() {
    const [count,setCount]=useState(0)
    console.log('Parent Render')
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Count to {count}</button>
      <button onClick={()=>setCount(0)}>Count to 0</button>
      <button onClick={()=>setCount(5)}>Count to 5</button>
      <Child/>
    </div>
  )
}

export default Parents
