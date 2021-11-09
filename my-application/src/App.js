import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Login from './components/LogIn/Login';
import SignUp from './components/SignUp/SignUp';


function App() {
    const [isTrue, setIsTrue] = useState(true);
    const loginFormHandler = () => {
        setIsTrue(true);
    };
    const signUpFormHandler = () => {
        setIsTrue(false);
    };

    return (
        <div className="login_wrapper">
            <div className="login_box">
                <a href="#" className="logo_text">
                    <span>JL</span> Just Log
                </a>
                <div className="login_form">
                    <div className="login_form_inner">
                        <h3>Login to <span>your account</span></h3>
                        <ul className="login_tab">
                            <li><a className={isTrue ? "active" : ""} onClick={loginFormHandler}> Login</a></li>
                            <li><a className={isTrue ? "" : "active"} onClick={signUpFormHandler}> Register</a></li>
                        </ul>
                        {isTrue ?
                            <Login /> :
                            <SignUp />
                        }
                    </div>
                    <div className="or_options text-center">
                        <div className="or_text"><span>Or Login With</span></div>
                        <ul className="social-list clearfix">
                            <li><a className="s_facebook"><i className="fa fa-facebook"></i> Facebook</a></li>
                            <li><a className="s_twitter"><i className="fa fa-twitter"></i> Twitter</a></li>
                            <li><a className="s_google"><i className="fa fa-google-plus"></i> Google</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
