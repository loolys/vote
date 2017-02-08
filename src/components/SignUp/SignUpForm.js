import React, { Component } from 'react';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordConfirmation: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control" />
        </div>
        
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Confirm Password</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className="form-control" />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
};

