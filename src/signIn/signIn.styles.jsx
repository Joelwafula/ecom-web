import React from "react";
import '.signIn.styles.scss';

import React, { Component } from 'react'
import { Form } from "react-router-dom";

class SignIn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         password:'',
      }
    }
  render() {

    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>Sign in with your email and password</span>
        <Form>
            <input name="email" type="email" value={this.state.email} required/>
            <label>Email</label>

            <input name="password" type='password' value={this.state.password} required/>
            <label>Password</label>
        </Form>
        
      </div>
    )
  }
}
export default SignIn
