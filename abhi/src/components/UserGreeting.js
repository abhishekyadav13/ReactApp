import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {

    return this.state.isLoggedIn && <div>Welcome abhi</div>

    //   return(
    //     this.state.isLoggedIn
    //     ?<div>Welcome abhi</div>
    //     :<div>Welcome guest</div>
    //   )

    //   let Message
    //   if(this.state.isLoggedIn){
    //     Message=<div>Welcome abhi</div>
    //   }
    //   else{
    //     Message=<div>Welcome Guest</div>
    //   }
    //   return <div>{Message}</div>

    // if(this.state.isLoggedIn){
    //     return <div>Welcome abhi</div>
    // }
    // else{
    //     return <div>Welcome Guest</div>
    // }

    // return (
    //   <div>
    //     <div>Welcome abhi</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
