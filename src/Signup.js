import React from 'react';
import './Signup.css';


function Signup() {
  return (
    <div className="sign">
        <form className="formsec">
            <h1>Sign Up</h1>
                    <label for="Name"><b>Name</b></label><br></br>
					<input type="text"  name="Name" className="one" /><br></br>
					<label for="psw"><b>Email</b></label><br></br>
					<input type="text"  name="email" className="one" /><br></br>
                    <label for="email"><b>Password</b></label><br></br>
					<input type="password"  name="password" className="one" /><br></br>
					<label for="psw"><b>Confirmation</b></label><br></br>
					<input type="password"  name="cpsw" className="one" /><br></br> 
          <button className="two">Create My Account</button>
     </form>
    </div>
  );
}

export default Signup;
