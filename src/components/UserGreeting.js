import React, { Component } from 'react';

class UserGreeting extends Component {

constructor(props){
    super(props)
    this.state = {
        isLoggedIn: true
    }
}

    render() {

        return this.state.isLoggedIn?(
         <div> welcome mahwish</div>
        ):(
            <div> welcome guest</div>
        )

        /* let message
         
        if(this.state.isLoggedIn){
           message=<div>welcome mahwish</div>
        }
        else{
            message=<div>welcome guest</div>
        }
 */
        //return <div> {message}</div>
    }
        /* if(this.state.isLoggedIn){
        return <div>welcome mahwish</div>
        }else{
            return <div>welcome guest</div> 
        }
            
    } */
}

export default UserGreeting;