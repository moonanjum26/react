import React, {Component} from 'react'

class Message extends Component{
constructor(){
    super()
    this.state={
        Message:'welcome visitor'
    }
}

 changeMessage(){
     this.setState({
         Message:'thankyou'
     })
 }
    render(){
        return (
          <div>
            <h1>
               {this.state.Message}
            </h1>
               <button onClick={()=> this.changeMessage()}> subscribe</button>
           
          </div>
           
              )
    }
}

export default Message