import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/Hello'
import React, { Component, Fragment } from 'react';
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Fragmentdemo from './components/Fragmentdemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

class App extends Component {
  render(){
    return (
       <div className="App">
         <ParentComp/>
         {/* <Table/> */}
         {/* <Fragmentdemo/> */}
         {/* <LifecycleA/> */}
         {/* <Form/> */}
         {/* <h1 className = 'error'>Error</h1>
         <h1 className = {styles.success}>Success</h1>
         <Inline/>  */}
         {/* <Stylesheet primary = {true} /> */}
         {/* <NameList/> */}
        {/*  <UserGreeting/> */}
         {/* <ParentComponent/> */}
         {/* <FunctionClick/>
         <ClassClick/> */}
         {/* <EventBind/> */}
         {/* <Counter/>
         <Message/> 
         <Greet name='a' charName='alpha'>
           <p> this is children </p>
           </Greet>
          <Welcome name='a' charName='alpha'/>
         <Welcome name='b'/>
         <Hello/>   */}
      </div>
  );
   }
}

export default App;
