import React, { Component } from 'react';
import Contacts from './Contacts'

class Restful extends Component {
  render() {
    return (
      <div>
        <Contacts hello={this.state.contacts} />
      </div>
    );
  }
  state = {
    contacts: []
  };
  componentDidMount() {
    console.log("After componentDidMount");
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }
}

export default Restful;