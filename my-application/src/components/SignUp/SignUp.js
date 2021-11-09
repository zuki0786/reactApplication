import React from 'react';

const SignUp = () => {
    return (
        <>
            <form>
                <div className="form-group">
                    <input type="text" name="FullName" className="input-text" placeholder="Full Name" />
                </div>
                <div className="form-group">
                    <input type="password" name="Password" className="input-text" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="email" name="email" className="input-text" placeholder="Email Address" />
                </div>
                <div className="checkbox clearfix">
                    <div className="form-check checkbox-input">
                        <input className="form-check-input" type="checkbox" value="" id="termServices" />
                        <label className="form-check-label" for="termServices">
                            I agree to the terms of service
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn-md btn-theme btn-block">Login<i className="fa fa-arrow-right"></i></button>
                </div>
            </form>
        </>
    );
};
export default SignUp;
