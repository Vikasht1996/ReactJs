import React from 'react';
import './Signup.css';
import Signin from './Signin'

function Signup() {
  return (
    <div className="sign">
        <form className="formsec">
            <h1>Sign Up</h1>
                    <label ><b>Name</b></label><br></br>
					<input type="text"  name="Name" className="one" /><br></br>
					<label ><b>Email</b></label><br></br>
					<input type="text"  name="email" className="one" /><br></br>
                    <label ><b>Password</b></label><br></br>
					<input type="password"  name="password" className="one" /><br></br>
					<label ><b>Confirmation</b></label><br></br>
					<input type="password"  name="cpsw" className="one" /><br></br> 
          <button className="two"><b>Create My Account</b></button>
     </form><br/><br/><br/><br/>
     <Signin/>
    </div>
  );
}

export default Signup;
