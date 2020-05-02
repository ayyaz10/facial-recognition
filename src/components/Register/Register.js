import React from 'react';

const Register = ({ onRouteChange }) => {
        return (
            <article className="br3 pa2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa2 black-80">
                    <div action="sign-up_submit" method="get" acceptCharset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend></legend>
                        <legend className="f2 ph0 mh0 fw6 center">Register</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="mt3"><input onClick={ () => onRouteChange('home') } className="b ph3 pv2 input-reset ba b--black bg-transparent grow f6 pointer" type="submit" value="Register"/></div>
                    <div className="lh-copy mt4">
                    </div>
                </div>
            </main>
        </article>
    )
}
export default Register;
