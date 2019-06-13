import React, { Component } from 'react';

class Arrowfunonchange extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '' }
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
     
    render() {
        return (
            <div>
                      <h1>{this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
 
                
            </div>
        );
    }
}

export default Arrowfunonchange;