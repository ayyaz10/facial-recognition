import React from 'react';
// import { ReactComponent } from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === 'success') {
                this.props.onRouteChange('home') 
            }
        })

    }

    render(){
        const {onRouteChange} = this.props;
        return (
            <article className="br3 pa2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa2 black-80">
                    <div action="sign-up_submit" method="get" acceptCharset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend></legend>
                        <legend className="f2 ph0 mh0 fw6 center">Sign Up</legend>
                        <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="mt3"><input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"/></div>
                    <div className="lh-copy mt4">
                        <p onClick={()=> onRouteChange('register')} href="" className="f6 ba link dim black db pointer">Register</p>
                    </div>
                </div>
            </main>
        </article>
        )
    }
}
export default Signin;
