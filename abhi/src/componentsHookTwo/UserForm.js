import React,{useState} from 'react'
import useInput from '../Hooks/useInput'

function UserForm() {

    const [firstName,bindFirstName,resetFirstName]=useInput('')
    const [lastName,bindLastName,resetLastName]=useInput('')

    const handlerClick=e=>{
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
       <form onSubmit={handlerClick}>
         <div>
            <label>First Name</label>
            <input 
            {...bindFirstName}
            type='text'/>
         </div>
         <div>
            <label>Last Name</label>
            <input 
            {...bindLastName}
            type='text'/>
         </div>
         <button>Submit</button>
       </form>
    </div>
  )
}

export default UserForm
