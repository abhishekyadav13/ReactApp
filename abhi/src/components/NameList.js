import React from 'react'
import Person from './Person'

function NameList() {
//     const persons=[
//         {
//             name:"abhi",
//             id:1
//         },
//         {
//             name:"world",
//             id:2
//         }
//     ]
//     const personList=persons.map(person=><Person key={person.id} person={person}/>)
//   return  <div>{personList}</div>

   const names=["abhi","world"]
   const nameList=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
   return <div>{nameList}</div>
  
}

export default NameList
