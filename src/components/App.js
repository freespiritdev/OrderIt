import React, { Component } from 'react'
import { Link } from 'react-router'
import Order from './Order'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Order Form</h1>
        <Order/> 
      </div>
      
    )
  }
}



