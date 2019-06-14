import React, { Component } from 'react';
import Contacts2 from './Contacts2'

class Restfulltask2 extends Component {
  render() {
    return (
      <div>
        <Contacts2 hello={this.state.contacts2} />
      </div>
    );
  }
  state = {
    contacts2: ''
  };
  componentDidMount() {
    console.log("After componentDidMount");
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts2: data })
      })
      .catch(console.log)
  }
}

export default Restfulltask2;