import React,{Component} from 'react';
import '../css/Registrer.css';
import {NavLink} from 'react-router-dom';

class Menu extends Component
{
    render(){
        return(
    <div class="main">
      <div class="one">
        <div class="register">
          <h3>Create your account</h3>
          <form id="reg-form">
            <div>
              <label for="name">Name</label>
              <input type="text" id="name" spellcheck="false" placeholder="Shridhar Deshmukh"/>
            </div>
            <div>
              <label for="email">Email</label>
              <input type="text" id="email" spellcheck="false" placeholder="shridhardeshmukh@xyz.com"/>
            </div>
            <div>
              <label for="username">Username</label>
              <input type="text" id="username" spellcheck="false" placeholder="shree33" />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div>
              <label for="password-again">Password Again</label>
              <input type="password" id="password-again" />
            </div>
            <div>
              <label></label>
              <input type="submit" value="Create Account" id="create-account" class="button"/>
            </div>
          </form>
          <div class="sep">
            <span class="or">OR</span>
          </div>
          <div class="connect">
            <div class="social-buttons facebook">
              <a href="#">
                <span>Facebook</span>
              </a>
            </div>
            <div class="social-buttons twitter">
              <a href="#">
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
        );
    }
}
export default Menu;