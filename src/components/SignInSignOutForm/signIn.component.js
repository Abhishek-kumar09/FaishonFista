import React from 'react';
import './signIn.styles.scss';
import CustomButton from '../custom-Button/custom-button.component'
import { SignInWithGoogle } from '../../firebase/firebase.config'

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      "password": ""
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault();
    // Ashish: put the request to your server
  }

  render() {
    return <>
      <div
        style={{
          background: "url(https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg)",
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          backgroundRepeat: "no-repeat",
          "background-size": "cover"
        }}
      ></div>
      <div className='signIn'>
        <h2>Privacy Redifined </h2>
        <span className='subheading'>Sign In with Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <input className='form-component'
            type='email'
            name="email"
            label='hello'
            value={this.state.email}
            onChange={this.handleChange} />
          <input className='form-component'
            type='password'
            name="password"
            value={this.state.password}
            onChange={this.handleChange} />
          <CustomButton type='submit'
            name='submit'>Submit</CustomButton>
          <CustomButton onClick={SignInWithGoogle}>
            Sign In with Google</CustomButton>
        </form>

      </div></>
  }
}


export default SignInForm;