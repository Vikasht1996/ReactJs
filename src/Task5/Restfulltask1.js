import React, { Component } from 'react';
import Contacts1 from './Contacts1'
// import Restfulltask2 from './Restfulltask2'

class Restfulltask1 extends Component {
  render() {
    return (
      <div>
        <Contacts1 hello={this.state.contacts1} rest={this.state.contacts2}/>
        {/* <Restfulltask2/> */}
      </div>
    );
  }
  state = {
    contacts1: '',
    contacts2:''
  };
  componentDidMount() {
    console.log("After componentDidMount");
    fetch('https://api.github.com/users/KrunalLathiya')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts1: data })
      })
      .catch(console.log)
      fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts2: data })
      })
      .catch(console.log)
  }
}

export default Restfulltask1;