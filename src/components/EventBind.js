import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: 'hello'
        }
        this.changeMessage=this.changeMessage.bind(this)  //(binding in constructor)
    }

    changeMessage(){
        this.setState({
            message:'bye'
        })
        //console.log(this)
    }
    
    /* changeMessage = ()=>{
        this.setState({
            message: 'bye'
        })
    } */
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
              {/* <button onClick={()=> this.changeMessage()}>Click</button>   */}
              {/* <button onClick={this.changeMessage}>Click</button> */}
              <button onClick={this.changeMessage}>Click</button>
            </div>
        );
    }
}

export default EventBind;