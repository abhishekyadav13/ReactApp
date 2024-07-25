import React,{Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log("callback "+ this.state.count)
        // })

        //incrementFive is working here as instead of object we are passing it in function
        this.setState((preState)=>({
             count:preState.count+1
        }))
           console.log(this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return(
            <div>
             <div>Count -- {this.state.count}</div>
             <button onClick={()=>{this.incrementFive()}}>Increment</button>
            </div>
        ) 
    }
}

export default Counter;