import React, { Component } from 'react';

class LifecycleB extends Component {

    constructor (props){
        super(props)
        this.state = {
            name : 'mahwish'
        }
        console.log('Lifecycle B constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentdidmount')
    }

    shouldComponentUpdate(){
        console.log('lifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                Lifecycle B
            </div>
        );
    }
}

export default LifecycleB;