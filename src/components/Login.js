import React, {Component} from 'react';
import '../css/Login.css';

class Login extends Component
    {
        render()
        {
            return(
            <div>
                <div id="logincillo" className="login-container row">
                    <div className="col-xs-0 col-sm-0 col-md-3 col-lg-4 col-xl-4">
                    </div>
                    <section className="login col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" id="login">
                        <header>
                        <h2>Introduce tus datos</h2>
                        <h4>Clizza</h4>
                        </header>
                        <form className="login-form" action="#" method="post">
                            <input type="text" className="login-input" placeholder="User" required autoFocus/>
                            <input type="password" className="login-input" placeholder="Password" required/>
                            <div className="submit-container">
                                <button type="submit" className="login-button">Inicia Sesión</button>
                            </div>
                        </form>
                    </section>
                    <div className="col-xs-0 col-sm-0 col-md-3 col-lg-4 col-xl-4">
                    </div>
                </div>
            </div>
            );
        }
    }
export default Login;