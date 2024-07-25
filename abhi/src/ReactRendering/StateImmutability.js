import React,{useState} from 'react'

const StateImmutability = () => {
    const init={
        fname:'abhi',
        lname:'yadav'
    }
    const [person,setPerson]=useState(init)

     const changeName=()=>{
        // person.fname='yadav'
        // person.lname='abhi'
        // setPerson(person)

        //by doing above things the name does not re-render as it changed the 
        //person but the reference remains same so so first copy it
        //and again perform the operation and same in case of array
        const newperson={...person}
        newperson.fname='yadav'
        newperson.lname='abhi'
        setPerson(newperson)
    }
    console.log('Object Rendering')
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default StateImmutability
