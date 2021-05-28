import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        const {state1, state2} = this.props
        return <h1> Welcome {state1} a.k.a {state2}</h1>
    }
}

export default Welcome