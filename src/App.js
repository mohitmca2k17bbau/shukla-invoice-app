import React, { Component } from "react"
// import { TEXT_CONFIG } from "./constants/production";
import { TEXT_CONFIG } from "./constants/dev";
import { today } from './constants/today';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
const DATE = new Date();
class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state
    
    return (
      <div >
        <div className="container">
            <div className="brand-section">
              <div className="row">
                <div className="col-md-4 col-sm-3 col-6">
                  <h1 className="text-white">{TEXT_CONFIG.LOGO_TEXT}</h1>
                  <h4 className="text-white">{TEXT_CONFIG.LOGO_TEXT2}</h4>
                </div>
                <div className="col-md-8 col-sm-9 col-6">
                  <div className="company-details">
                    <p className="text-white">{TEXT_CONFIG.TOP_LINE1}</p>
                    <p className="text-white">{TEXT_CONFIG.TOP_LINE2}</p>
                    <p className="text-white">{TEXT_CONFIG.TOP_LINE3}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="body-section">
              <div className="row">
                <div className="col-md-4 col-sm-3 col-6">
                  <h2 className="heading">Invoice No.: #{ (DATE.getFullYear().toString().substr(-2))+''+DATE.getMonth()+''+DATE.getDate()+''+DATE.getHours()+''+DATE.getMinutes()+''+DATE.getSeconds() }</h2>
                  <p className="sub-heading">GST No.: { TEXT_CONFIG.GST } </p>  
                  <p className="sub-heading">Order Date: { today() } </p>
                  {/* <p className="sub-heading">Email: { TEXT_CONFIG.OWNER_EMAIL } </p> */}
                </div>
                <div className="col-md-8 col-sm-9  col-6">
                  <p className="sub-heading">Full Name:</p>
                  <p className="sub-heading">Address:</p>
                  <p className="sub-heading">Phone Number:</p>
                  <p className="sub-heading">City,State,Pincode:</p>
                </div>
              </div>
            </div>
            <div className="body-section">
              <h3 className="heading">Ordered Items</h3>
              <br />
              <table className="table-bordered">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className="w-20">Price</th>
                    <th className="w-20">Quantity</th>
                    <th className="w-20">Grandtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product Name</td>
                    <td>10</td>
                    <td>1</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-right">Sub Total</td>
                    <td> 10.XX</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-right">Tax Total %1X</td>
                    <td> 2</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-right">Grand Total</td>
                    <td> 12.XX</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h3 className="heading">Payment Status: Paid</h3>
              <h3 className="heading">Payment Mode: Cash on Delivery</h3>
            </div>
            <div className="body-section">
              <p>© Copyright 2021 - M Awasthi. All rights reserved. 
                <a href="#" className="float-right">Print</a>
              </p>
            </div>      
          </div>  
        </div>
      
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
         <LambdaDemo />

         {/* <p>
          <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
          <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
          <br />
          <span>{msg}</span>
        </p> */}
      </div>
    )
  }
}

export default App
