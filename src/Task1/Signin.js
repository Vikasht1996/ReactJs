import React from 'react';
import './Signin.css';


function Signin() {
  return (
    <div className="signin">
     <center> <form>
       <h1 className="head">SIGN IN</h1>
         
					<input type="text"  name="email" placeholder="email-address"/><br></br><br></br>        
					<input type="password"  name="password" placeholder="password"/><br></br><br></br>
          <button className="log"><b>Login</b></button><br></br><br></br>
          <a href="" className="anchor">forget your passwors?</a>
          </form>
          <p className="prg">Don't have an account?<a href="">Signup</a></p></center>
          
    </div>
  );
}

export default Signin;
