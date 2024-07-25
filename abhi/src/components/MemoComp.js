import React from 'react'

function MemoComp({name}) {
    console.log("rendering the memo component")
  return (
    <div>
      {name}
    </div>
  )
}
//React.memo prevent it from rendering it again and again
export default React.memo(MemoComp) 
