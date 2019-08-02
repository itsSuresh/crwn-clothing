import React from 'react';
import './signin.style.scss';
import FormInput from '../forminput/form-input.component';
import CustomButton from '../custombutton/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(){
        super();

        this.state ={
            email:'',
            password:'',
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email:'',password:''});
    }
    handleChange = (event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className="sign-in" >
                <h2>I already have an account &darr; </h2>
                <span> signin using email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" type="email" name="email" value={this.state.email}  required/>
                    <FormInput handleChange={this.handleChange} type="password" name="password" value={this.state.password} label="password" required/>
                    <div className='buttons'>
                        <CustomButton  type="submit" value="signin">Sign In</CustomButton>
                         <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;