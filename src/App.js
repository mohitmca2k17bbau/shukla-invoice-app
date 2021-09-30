import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

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
      <div className="App">
        <div className="container">
            <div className="brand-section">
              <div className="row">
                <div className="col-6">
                  <h1 className="text-white">FABCART</h1>
                </div>
                <div className="col-6">
                  <div className="company-details">
                    <p className="text-white">assdad asd  asda asdad a sd</p>
                    <p className="text-white">assdad asd asd</p>
                    <p className="text-white">+91 888555XXXX</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="body-section">
              <div className="row">
                <div className="col-6">
                  <h2 className="heading">Invoice No.: 001</h2>
                  <p className="sub-heading">Tracking No. fabcart2025 </p>
                  <p className="sub-heading">Order Date: 20-20-2021 </p>
                  <p className="sub-heading">Email Address: customer@gfmail.com </p>
                </div>
                <div className="col-6">
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
              <p>© Copyright 2021 - Fabcart. All rights reserved. 
                <a href="https://www.fundaofwebit.com/" className="float-right">www.fundaofwebit.com</a>
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
      </div>
    )
  }
}

export default App
