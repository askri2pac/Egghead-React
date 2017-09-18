import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(){
    super();
    this.state = {a : ''};
    this.state = {b : ''};
    this.update = this.update.bind(this);
  }
  update(){
    this.setState ({a: this.a.value ,b: this.refs.b.value })
  }

  render() {
    return (
      <div>
        <input
        ref = {node => this.a = node}
         type="text" onChange = {this.update}/>
        {this.state.a}
        <hr/>
        <input
        ref="b"
         type="text" onChange = {this.update}/>
        {this.state.b}
      </div>
    )
  }
}


