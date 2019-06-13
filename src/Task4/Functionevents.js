import React, { Component } from 'react';
import './Functionevents.css'

class Functionevents extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '',
                        name:'',
                         }
                         this.changeName=this.changeName.bind(this);
    }
    changeName()
    {
        this.setState({ name:'Vikas'});
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
     
    render() {
        return (
            <div>
               <center><div className="one"><h2>{this.state.name}</h2>
                <input type="text" value="ABC"/><br/>
                <button onClick={this.changeName}>ChangeName</button>
                      <h1>{this.state.username}</h1>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
            </div></center> 
                
            </div>
        );
    }
}
export default Functionevents;