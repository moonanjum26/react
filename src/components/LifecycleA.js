import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor (props){
        super(props)
        this.state = {
            name : 'mahwish'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('lifecycleA componentdidmount')
    }

    shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'codevolution'
        })
    }

    render() {
        console.log('lifecycleA render')
        return (
        <div>
            <div>lifecycleA </div>
            <button onClick={this.changeState}> change state</button>
              <LifecycleB/>
            
            </div>
        );
    }
}

export default LifecycleA;