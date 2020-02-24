import React from 'react';
import './sign_in_sihn_out.styles.scss'

class SignInSignUp extends React.component{
    constructor() {
        super();
        this.state = {
            user: {
                password: "",
                email : ""
            }
        }
    }

    render() {
        return (
            <div>Hello</div>
        );
    }
}