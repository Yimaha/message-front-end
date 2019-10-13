import React, { Component } from 'react';
import { login } from '../api'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.userNameOnChange = this.userNameOnChange.bind(this);
    this.passwordOnCHange = this.passwordOnCHange.bind(this);
  }

  submitHandler() {
    login("justidnai222@yop.com", "Raasdadasdadaed").then(res => console.log(res))
  }

  userNameOnChange(e) {
    this.setState({
      userName: e.target.value
    })
  }

  passwordOnCHange(e) {
    this.setState({
      password: e.target.value
    })
  }


  render() {
    return (
      <>
        <input onChange={this.userNameOnChange}></input>
        <input onChange={this.passwordOnCHange}></input>
        <button onClick={this.submitHandler}>submit</button>
      </>
    );
  }

}

export default Login;