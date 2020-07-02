import React from 'react';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordState: 'password',
            spanText: 'Show'
        }
    }

    onChangePasswordState = (event) => {
        if(this.state.passwordState === 'password') {
            this.setState({passwordState: 'text'})
            this.setState({spanText: 'Hide'})
        } else {
            this.setState({passwordState: 'password'})
            this.setState({spanText: 'Show'})
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmitSignup = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loaduser(user);
                this.props.onRouteChange('home')    
            }
        })

    }
    
    render(){
        return (
            <article className="br3 pa2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa2 black-80">
                    <div action="sign-up_submit" method="get" acceptCharset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend></legend>
                        <legend className="f2 ph0 mh0 fw6 center">Register</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                            <input onChange={this.onNameChange} className="w-100 pa2 input-reset ba bg-transparent measure" type="text" name="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                            <input onChange={this.onEmailChange} className="w-100  pa2 input-reset ba bg-transparent measure" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="w-100 pa2 input-reset ba bg-transparent measure" type={this.state.passwordState} name="password"  id="password" />
                            <span style={{position: 'relative', bottom: "26px", left: '120px', cursor: 'pointer'}} onClick={this.onChangePasswordState}>{this.state.spanText}   </span>
                        </div>
                    </fieldset>
                    <div className="mt3"><input onClick={this.onSubmitSignup} className="b ph3 pv2 input-reset ba b--black bg-transparent grow f6 pointer" type="submit" value="Register"/></div>
                    <div className="lh-copy mt4">
                    </div>
                </div>
            </main>
        </article>
    )
}
}
export default Register;
