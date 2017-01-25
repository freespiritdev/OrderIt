import React, { Component } from 'react'
import { Link } from 'react-router'
import NewOrder from './NewOrder'
import Navbar from './Navbar'

export default class App extends Component {
  render() {
    return (
      <div className="container">
      	<Navbar/>
      	<Header/>
        <NewOrder/> 
      </div>
      
    )
  }
}

class Header extends React.Component {
   render() {
      return (
         <div className="text-center">
            <h1>Order It</h1>
         </div>
      );
   }
}



