import React, { useState,useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentsComponent() {
  const [age,setAge]=useState(20)
  const [salary,setSalary]=useState(50000)

  const incrementAge=useCallback(()=>{
    setAge(age+1)
  },[age])
  const incrementSalary=useCallback(()=>{
    setSalary(salary+1)
  },[salary])

  return (
    <div>
      <Title/>
      <Count text='Age' count={age}/>
      <Button handleClick={incrementAge}>Increment age</Button>
      <Count text='Salary' count={salary}/>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentsComponent
