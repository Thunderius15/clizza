import React,{Component} from 'react';
import '../css/Registrer.css';

class Menu extends Component
{
    constructor()
    {
        super();
        this.state = {
            contenido: ""
        }
        this.RegistrerInfo = this.RegistrerInfo.bind(this);
        this.validarEmail = this.validarEmail.bind(this);
        this.validarPassword = this.validarPassword.bind(this);
    }

    validarEmail(valor) {
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
            return true;
        } else {
            return false;
        }
    }
        validarPassword(valor) {
        if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valor))
        {
            return true;
        } else {
            return false;
        }
    }
    RegistrerInfo()
    {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("password").value;
        var password2 = document.getElementById("password-again").value;

        if (name){
            if (email){
                if(this.validarEmail(email)){
                    if (username){
                        if(phone){
                            if (password){
                                if (password2){
                                    if (password === password2){
                                        if(this.validarPassword(password)){
                                        fetch('http://localhost:8080/RegistrerInfo?name='+name+'&email='+email+'&username='+username+'&phone='+phone+'&password='+password)
                    .then(response => response.json())
                    .then((mensaje) => {
                        this.setState({
                            contenido: mensaje.contenido
                        })
                        console.log(this.state.contenido)
                    });
                                        }else{
                                            alert("Yo need at least \n min 8 characters and max 16 \n At least one capital letter \n At least one number")
                                        }
                                    }else{
                                        alert("Passwords don't match")
                                    }
                                }else{
                                    alert("password2 required")
                                }
                            }else{
                                alert("password required")
                            }
                        }else{
                            alert("phone required")
                        }
                    }else{
                        alert("username required")
                    }
                }else{
                    alert("wrong email, please write again.")
                }
            }else{
                alert("email required")
            }
        }else{
            alert ("Name required")
        }
    }
    render(){
        return(
            <div className="row">
                <div className="col-xs-0 col-sm-0 col-md-2 col-lg-3 col-xl-3"></div>
                <div className= "container col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-6">
                    <div className="main">
                        <div className="one">
                            <div className="register">
                                <h3 className="titulo">Create your account</h3>
                                <form id="reg-form">
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" spellCheck="false" placeholder="Full Name"/>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="text" id="email" spellCheck="false" placeholder="Example: myname@ilovepizza.com"/>
                                    </div>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" id="username" spellCheck="false" placeholder="Example: myname123" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" id="phone" />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" />
                                    </div>
                                    <div>
                                        <label htmlFor="password-again">Password Again</label>
                                        <input type="password" id="password-again" />
                                    </div>
                                    <div>
                                        <input type="button" value="Create Account" id="create-account" className="button" onClick={this.RegistrerInfo}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                {this.state.contenido}
                </div>
                <div className="col-xs-0 col-sm-0 col-md-2 col-lg-3 col-xl-3"></div>
            </div>
        );
    }
}
export default Menu;