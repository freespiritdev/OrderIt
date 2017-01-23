import React, { Component } from 'react'
import { Link } from 'react-router'
import Order from './Order'

export default class App extends Component {
  render() {
    return (
      <div>
      	<Header/>
        <Order/> 
      </div>
      
    )
  }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Order It</h1>
         </div>
      );
   }
}



