import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';

import SignUpForm from './SignUpForm';

class SignUp extends Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignUpForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
};

export default connect(null, { userSignupRequest })(SignUp);
