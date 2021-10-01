import React, { Component } from "react"
import { InlineInputEdit } from 'react-inline-input-edit';


import { TEXT_CONFIG } from "./constants/production";
// import { TEXT_CONFIG } from "./constants/dev";



import { today } from './constants/today';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
const DATE = new Date();
class LambdaDemo extends Component {
  
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null, grandTotal: 0 , sgstTotal: 0, gstTotal:0}
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }
  _handleFocus = (text, type) => {

  };
  
  _updateTotal () {
    let amount = this.state.amount;
    
    if( amount !=='' ){
      amount = Number(amount);
      if(isNaN(amount)) alert("Amount should be numeric, please re-enter")
      else {
        let sg = amount*Number(TEXT_CONFIG.SGSTP)/100;
        let g = amount*Number(TEXT_CONFIG.GSTP)/100;
        let total = amount + sg + g;
        this.setState({ grandTotal : Number(total).toFixed(2) })
        this.setState({ sgstTotal : Number(sg).toFixed(2) })
        this.setState({ gstTotal : Number(g).toFixed(2) })
      }
    }
  }
  _handleFocusOut = (text,type) => {
    this.setState({
      [type]: text 
    },() => {
        console.log(this.state);
        this._updateTotal()
    });
  };

  render() {
    const { sgstTotal, grandTotal, gstTotal } = this.state
    
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
                  
                  <p> Customer: <InlineInputEdit
                        labelPlaceHolder={`Enter name`}
                        labelClassName="inlineLabelClass"
                        inputWidth="150px"
                        inputHeight="20px"
                        inputMaxLength={50}
                        onFocus={ (v) => this._handleFocus(v,'fullName')}
                        onFocusOut={ (v) => this._handleFocusOut(v,'fullName')}
                        inputClassName="inlineInputClass"
                      /></p>
                  
                  <p> Address: <InlineInputEdit
                        labelPlaceHolder={`Enter address`}
                        labelClassName="inlineLabelClass"
                        inputWidth="150px"
                        inputHeight="20px"
                        inputMaxLength={50}
                        onFocus={ (v) => this._handleFocus(v,'address')}
                        onFocusOut={ (v) => this._handleFocusOut(v,'address')}
                        inputClassName="inlineInputClass"
                      /></p>
                  
                  <p> Contact: <InlineInputEdit
                        labelPlaceHolder={`Enter mobile`}
                        labelClassName="inlineLabelClass"
                        inputWidth="150px"
                        inputHeight="20px"
                        inputMaxLength={50}
                        onFocus={ (v) => this._handleFocus(v,'contact')}
                        onFocusOut={ (v) => this._handleFocusOut(v,'contact')}
                        inputClassName="inlineInputClass"
                      /></p>
                </div>
              </div>
            </div>
            <div className="body-section">
              <h3 className="heading">Purchased Item</h3>
              <br />
              <table className="table-bordered">
                <thead>
                  <tr>
                    <th className="th-text">Product</th>
                    <th className="w-20 th-text">Price</th>
                    {/* <th className="w-20">Qty</th> */}
                    {/* <th className="w-20 th-text">Total</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-product">
                     <p> Mobile IMEI: <InlineInputEdit
                        labelPlaceHolder={`Enter IMEI`}
                        labelClassName="inlineLabelClass"
                        inputWidth="150px"
                        inputHeight="20px"
                        inputMaxLength={50}
                        onFocus={ (v) => this._handleFocus(v,'mobileImei')}
                        onFocusOut={ (v) => this._handleFocusOut(v,'mobileImei')}
                        inputClassName="inlineInputClass"
                      /></p>
                     <p> Battery No.: <InlineInputEdit
                        labelPlaceHolder={`Enter battery no.`}
                        labelClassName="inlineLabelClass"
                        inputWidth="150px"
                        inputHeight="20px"
                        inputMaxLength={50}
                        onFocus={ (v) => this._handleFocus(v,'batteryNo')}
                        onFocusOut={ (v) => this._handleFocusOut(v,'batteryNo')}
                        inputClassName="inlineInputClass"
                      /></p>
                     <p> Charger No.: <InlineInputEdit
                        labelPlaceHolder={`Enter charger no.`}
                        labelClassName="inlineLabelClass"
                        inputWidth="150px"
                        inputHeight="20px"
                        inputMaxLength={50}
                        onFocus={ (v) => this._handleFocus(v,'address')}
                        onFocusOut={ (v) => this._handleFocusOut(v,'address')}
                        inputClassName="inlineInputClass"
                      /></p>
                    </td>
                    <td>
                        <InlineInputEdit
                          labelPlaceHolder={`Enter amount`}
                          labelClassName="inlineLabelClass"
                          inputWidth="150px"
                          inputHeight="20px"
                          inputMaxLength={50}
                          onFocus={ (v) => this._handleFocus(v,'amount')}
                          onFocusOut={ (v) => this._handleFocusOut(v,'amount')}
                          inputClassName="inlineInputClass"
                        />
                    </td>
                    {/* <td>1</td> */}
                    {/* <td>xxxx</td> */}
                  </tr>
                  {/* <tr>
                    <td colSpan={1} className="text-right">Sub Total</td>
                    <td> xxx.xxx</td>
                  </tr> */}
                  <tr>
                    <td colSpan={1} className="text-right">SGST %{TEXT_CONFIG.SGSTP}</td>
                    <td> {sgstTotal}</td>
                  </tr>
                  <tr>
                    <td colSpan={1} className="text-right">GST %{TEXT_CONFIG.SGSTP}</td>
                    <td> {gstTotal}</td>
                  </tr>
                  
                  <tr>
                    <td colSpan={1} className="text-right">Grand Total</td>
                    <td> {grandTotal}</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <div className="col-6">
                  <h3 className="heading">Payment Status: </h3>
                </div>
                <div className="col-6">
                  <h3 className="heading">Signature:</h3>
                </div>
              </div>
            </div>
            <div className="body-section">
              <div className="row">
                <div className="col-6 col-md-6">
                  <p>©2021 - M Awasthi</p>
                </div>
                <div className="col-6 col-md-6">
                  <button onClick={ () => window.print() }>Print</button>
                </div>
              </div>
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
