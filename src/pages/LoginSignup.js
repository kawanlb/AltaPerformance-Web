//LoginSignup.js
import React, { useEffect } from 'react';
import './styles.css'; 

function LoginSignup() {
  useEffect(() => {
    const container = document.querySelector('.container');
    const signupButton = document.querySelector('.signup-section header');
    const loginButton = document.querySelector('.login-section header');

    const handleLoginButtonClick = () => {
      container.classList.add('active');
    };

    const handleSignupButtonClick = () => {
      container.classList.remove('active');
    };

    loginButton.addEventListener('click', handleLoginButtonClick);
    signupButton.addEventListener('click', handleSignupButtonClick);

    
    return () => {
      loginButton.removeEventListener('click', handleLoginButtonClick);
      signupButton.removeEventListener('click', handleSignupButtonClick);
    };
  }, []);

  return (
    <div>
      <div class="pawprints"></div>
    <div className="container">
      <div className="signup-section">
        <header>Cadastro</header>
        
        <div className="separator">
          <div className="line"></div>
         
          <div className="line"></div>
          
        </div>

        <form>
          <input type="text" placeholder="Nome Completo" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <a href="#">Esqueceu a Senha?</a>
          <button type="submit" className="btn">Entrar</button>

         
        </form>
      </div>

      <div className="login-section">
        <header>Login</header>
       
        <div className="separator">
          <div className="line"></div>
          
          <div className="line"></div>
        </div>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha " required />
          <a href="#">Esqueceu a Senha?</a>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default LoginSignup;
