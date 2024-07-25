import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"abhi"
      }
      console.log("LifecycleA constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }
    shouldComponentUpdate(){
      console.log("LifecycleA shouldComponentUpdate")
      return true
  }
  getSnapshotBeforeUpdate(preProps,preState){
      console.log("LifecycleA getSnapshotBeforeUpdate")
      return null
  }
  componentDidUpdate(){
      console.log("lifeycleA componentDidUpdate")
  }
  changeState=()=>{
    this.setState({
      name:"codeEvolution"
    })
  }
    
  render() {
    console.log("LifecycleA render")
    return (
      <div>
      <div>Lifecycle A  </div>
      <button onClick={this.changeState}>Change State</button>
      <LifecycleB/> 
      </div>
    )
  }
}

export default LifecycleA
