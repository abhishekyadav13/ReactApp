import React,{useState,useEffect,useRef} from 'react'

function HookTimer() {
    const [timer,setTimer]=useState(0)
    const intervalRef=useRef()

    useEffect(()=>{
         intervalRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return ()=>{
            clearInterval(intervalRef.current)
        }      
    },[])

     //we cannot access intervalRef from useEffect so we make it global with 
     //the help of useRef
  return (
    <div>
      <div>Hook timer  {timer}</div>
      <button onClick={()=>clearInterval(intervalRef.current)}>Clear Timer</button>
    </div>
  )
}

export default HookTimer
