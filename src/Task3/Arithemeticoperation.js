import React, { Component } from 'react';
import './Arithemetic.css';
class Arithemeticoperation extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            a:10,
            b:10,
            c:10,
        }
    }
    clickAdd = ()=>
    {
        this.setState({a:this.state.a+5})
    }
    clickSub = ()=>
    {
       
        if(this.state.b>0)
        {
            this.setState({b:this.state.b-5})
        }
    }
    clickMul = ()=>
    {
        this.setState({c:this.state.c*5})
    }
    render() {
        return (
            <div>
              <div className="container">
               <div ><h2>{this.state.a}</h2>
                <button className="add" onClick={this.clickAdd}>Addition</button></div> 
               <div ><h2>{this.state.b}</h2>
                <button className="add" onClick={this.clickSub}>Subtraction</button></div> 
                <div ><h2>{this.state.c}</h2>
                <button className="add" onClick={this.clickMul}>Multiplication</button></div>
                </div>
            </div>
        );
    }
}

export default Arithemeticoperation;