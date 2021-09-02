import React, { Component } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error);
    }
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className="SignIn col-sm-12 col-md-6">
        <h1>
          If you already have an account, please log in using your credentials:
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="SignIn-buttons">
            <button type="submit" className="btn btn-outline-dark">
              Log in with Email
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={signInWithGoogle}
            >
              Log in with Google
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
