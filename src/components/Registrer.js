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
    }
    RegistrerInfo()
    {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var phone = document.getElementById("phone").value;
        var direction = document.getElementById("direction").value;
        var password = document.getElementById("password").value;
        var password2 = document.getElementById("password-again").value;


        if (name){
            if (email){
                if (username){
                    if(phone){
                        if(direction){
                        if (password){
                            if (password2){
                                if (password === password2){
                                    fetch('http://localhost:8080/RagistrerInfo?name='+name+'&email='+email+'&username='+username+'&phone='+phone+'&direction='+direction+'&password='+password)
                .then(response => response.json())
                .then((mensaje) => {
                    this.setState({
                        contenido: mensaje.contenido
                    })
                });
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
                            alert("direction required")
                        }
                    }else{
                        alert("phone required")
                    }
                }else{
                    alert("username required")
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
<div className= "container">
    <div className="main">
      <div className="one">
        <div className="register">
          <h3>Create your account</h3>
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
              <label htmlFor="direction">Direction</label>
              <input type="text" id="direction" />
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
        );
    }
}
export default Menu;