import React,{useEffect,useRef} from 'react'

function UseRefFocusInput() {
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
      <input ref={inputRef} type='text'/>
    </div>
  )
}

export default UseRefFocusInput
