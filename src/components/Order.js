import React, { Component } from 'react'
import { render } from 'react-dom';

const uuid = require('uuid');

export default class Order extends Component  {
    constructor(props){
        super(props);

        this.state = {
            companyname: '',
            companyaddress: '',
            companycity : '',
            companystate : '',
            companypostalcode : '',
            lastname : '',
            firstname: '',
            email : '',
            phone : '',
            imgurl : ''
        }
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        e.preventDefault();
    }
  render(){
    let _this = this;
    
    return ( 
      <div>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <input type="text" 
            className="form-control"
            placeholder="Company Name"/>
            <input type="text"
            className="form-control"
            placeholder="Company Address"/>
            <input type="text"
            className="form-control"
            placeholder="Company City"/>
            <input type="text"
            className="form-control"
            placeholder="Company State"/>
            <input type="text"
            className="form-control"
            placeholder="Company Postal Code"/>
            <input type="text"
            className="form-control"
            placeholder="Last Name"/>
            <input type="text"
            className="form-control"
            placeholder="First Name"/>
            <input type="text"
            className="form-control"
            placeholder="Email"/>
            <input type="text"
            className="form-control"
            placeholder="Phone Number"/>
            <input type="text"
            className="form-control"
            placeholder="Image Link"/>
            <button type="submit" className="btn btn-success">Add</button>
            <button type="reset" className="btn btn-warning">Reset</button>
          </div>     
        </form>
      </div>)
  }
}


// export default class Root extends Component {
//  render(){
//    return ( 
//      <div>
//        <h1>Order.js file</h1>
//      </div>)
    
//  }
// }


