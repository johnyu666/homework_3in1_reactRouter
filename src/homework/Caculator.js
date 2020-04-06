import React from 'react'
import { Link } from "react-router-dom";
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { c: 0, alg: "1" }
    this.a = React.createRef()
    this.b = React.createRef()
  }
  _algSelectHandle = event => {
    this.setState({ alg: event.target.value })
  }
  _caculate = () => {
    let temp = 0
    let a = Number.parseFloat(this.a.current.value)
    let b = Number.parseFloat(this.b.current.value)
    switch (this.state.alg) {
      case "1":
        temp = a + b
        break;
      case "2":
        temp = a - b
        break;
      case "3":
        temp = a * b
        break;
      case "4":
        temp = a / b
        break;
      default:
        console.log("error select...")
    }
    this.setState({ c: temp })
  }
  render() {
    return (
      <div>
        <h1>四则运算 {this.state.alg}</h1>
        <input type="number" ref={this.a} />
        <select value={this.state.alg} onChange={event => this._algSelectHandle(event)}>
          <option defaultValue="1" >+</option>
          <option defaultValue="2">-</option>
          <option defaultValue="3">*</option>
          <option defaultValue="4">/</option>
        </select>
        <input type="number" ref={this.b}  />
        <input type="number" readOnly  value={this.state.c} />
        <button onClick={this._caculate}>运算</button>
        <div>
          <h2>这是一个由router的Link标签生成的链接：<Link to="/poker">poker</Link></h2>
          <a href="poker">poker</a>
        </div>
        
      </div>
    )
  }
}