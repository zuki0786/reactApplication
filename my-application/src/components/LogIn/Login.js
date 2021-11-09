import React from 'react';

const Login = () => {
    return (
        <>
            <form action="../index.html" method="GET">
                <div className="form-group">
                    <input type="email" name="email" className="input-text" placeholder="Email Address" />
                </div>
                <div className="form-group">
                    <input type="password" name="Password" className="input-text" placeholder="Password" />
                </div>
                <div className="checkbox clearfix">
                    <div className="form-check checkbox-theme">
                        <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                        <label className="form-check-label" for="rememberMe">
                            Remember me
                        </label>
                    </div>
                    <a href="forgot-password.html">Forgot Password</a>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn-md btn-theme btn-block">Login<i className="fa fa-arrow-right"></i></button>
                </div>
            </form>
        </>

    );
};
export default Login;
