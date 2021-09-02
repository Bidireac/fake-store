import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInSignUpPage = () => (
  <div className="SignInSignUpPage container">
    <div className="row align-items-center">
      <SignIn />
      <SignUp />
    </div>
  </div>
);

export default SignInSignUpPage;
