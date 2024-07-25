import React,{useState,useEffect} from 'react'

function UseEffectOnee() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log("useEffect changing the document")
        document.title=`You clicked ${count} times`
    },[count])  //when count changes then only useEffect re-renders
    return (
      <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
      </div>
    )
}

export default UseEffectOnee
