import React from 'react';
import './sign-in-and-sign-up-style.scss';
import SignIn from '../../components/singin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = ()=> (

       <div className="sign-in-and-sign-up"> 
              <SignIn /> 
              <SignUp />       
       </div>

);

export default SignInAndSignUp;
