import React,{useState,useMemo} from 'react'

function UseMemoCounter() {
    const [countOne,setCountOne]=useState(0)
    const [countTwo,setCountTwo]=useState(0)

    const incrementOne=()=>{
        setCountOne(countOne+1)
    }
    const incrementTwo=()=>{
        setCountTwo(countTwo+1)
    }
    // when we are clicking on count Two button then state is chnaged so the component 
    //re-renders so isEven function also re-render so to avoid this use useMemo
    
    const isEven=useMemo(()=>{
        let i=0
        while(i<2000000000) i++
        return countOne%2===0
    },[countOne])

  return (
    <div>
        <div>
            <button onClick={incrementOne}>Count One {countOne}</button>
            <span>{isEven?'even':'odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>Count Two {countTwo}</button>
        </div>
    </div>
  )
}

export default UseMemoCounter
