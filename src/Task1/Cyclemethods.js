import React, { Component } from 'react';
import './Signup.css';
import Signin from './Signin';

class Cyclemethods extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:'vikas'
        }
        console.log('LifeCycle Constructor');
    }
    componentWillMount()
    {
        console.log('LifeCycle Component will mount');
    }
    componentDidMount()
    {
        console.log('LifeCycle Component did mount');
 
    }
    render() {
        console.log('Lifecycle render');
        return (
            <div>
                <div className="sign">
        <form className="formsec">
            <h1>Sign Up</h1>
                    <label><b>Name</b></label><br></br>
					<input type="text"  name="Name" className="one" /><br></br>
					<label><b>Email</b></label><br></br>
					<input type="text"  name="email" className="one" /><br></br>
                    <label ><b>Password</b></label><br></br>
					<input type="password"  name="password" className="one" /><br></br>
					<label ><b>Confirmation</b></label><br></br>
					<input type="password"  name="cpsw" className="one" /><br></br> 
          <button className="two">Create My Account</button>
     </form>
    </div>

            <Signin/>
                
            </div>
        );
    }
}

export default Cyclemethods;