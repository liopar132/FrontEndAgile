import React, { useState } from "react";
import '../styles/LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";



const LoginRegister = () => {

const [action, setAction] = useState('');

const registerLink = () => {
  setAction(' active');
}

const LoginLink = () => {
  setAction('');
}



  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>Se connecter</h1>
          <div className="input-box">
            <input type="text" placeholder='Nom utilisateur' required/>
            <FaUser className='icon'/>

          </div>
          <div className="input-box">
            <input type="password" placeholder='Mot de passe' required/>
            <FaLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" /> Se souvenir</label>
            <a href="#">Mot de passe oublié?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>vous n'avez pas de compte ?
 <a href="#" onClick={registerLink}>S'inscrire</a></p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form action="">
          <h1>Inscription</h1>
          <div className="input-box">
            <input type="text" placeholder='Nom utilisateur' required/>
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="email" placeholder='email' required/>
            <FaEnvelope className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Mot de passe' required/>
            <FaLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" /> 
J'accepte les termes et conditions</label>
          </div>

          <button type="submit">S'inscrire</button>

          <div className="register-link">
            <p>
Vous avez déjà un compte? <a href="#" onClick={LoginLink}>Se connecter</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;