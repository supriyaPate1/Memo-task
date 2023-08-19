import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class WillMount extends Component {
    state={
        NumC:0,
    }
     interval="";
 componentDidMount(){
     this.interval=setInterval(() => {
         console.log("Jack");
         this.setState({
             NumC:++this.state.NumC
         })
    }, 1000);
 }
 componentWillUnmount(){
    clearInterval(this.interval)

 }

 
  render() {
    return (
      <div className='main2'>
        <div>
          <h1>DidMount and WillUnmount </h1>
        </div>
        <div>
          <p>{this.state.NumC}</p>
          
        </div>
        <ChildComponent/>
      </div>
    
      
    )
  }
}
