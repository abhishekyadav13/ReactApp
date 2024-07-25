import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"abhi"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"abhi"
            })
        },2000)
    }
    // after every 2 sec regComp got render but not pureComp as it measure exact same object 
    //but regComp measure same dataType and value
  render() {
    console.log("**ParentComp**")
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
