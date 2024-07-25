import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"abhi"
      }
      console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(preProps,preState){
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("lifeycleB componentDidUpdate")
    }
    
  render() {
    console.log("LifecycleB render")
    return (
      <div>
       Lifecycle    B   
      </div>
    )
  }
}

export default LifecycleB
