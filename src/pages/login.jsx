import Logo from "components/logo";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your state values: \n 
            email: ${email} \n 
            password: ${password} \n 
            You can replace this alert with your process`);
  };
  return (
    <div className="Login__container">
      <div className="Register_login_header">
        <Link className="Register_login__logo" to="/">
          <Logo />
        </Link>
      </div>
      <h2 className="login-title">Inicia Sesión</h2>
      <form action="" className="Login__form" onSubmit={handleSubmit}>
        <div className="Login__inputs">
          <input
            type="email"
            placeholder="Correo Electrónico"
            onChange={handleEmailChange}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={handlePasswordChange}
            value={password}
            required
          />
        </div>
        <div className="Login__rememberForget">
          <label htmlFor="remember_me">
            <input type="checkbox" name="remember_me" />
            Remember me
          </label>
          <Link className="Login__rememberForget__Link" to="/recover">
            <div>Olvide mi Contraseña</div>
          </Link>
        </div>
        <div>
          <Link to="/admin">
            <button
              className="Login__submit"
              type="submit"
              disabled={!email || !password}
              onSubmit={handleSubmit}
            >
              Inicia Sesión
            </button>
          </Link>
        </div>
        <div className="Login__register">
          <span>¿No tienes cuenta?</span>
          <Link className="Login__register__Link" to="/sign-in">
            <div>Regístrate</div>
          </Link>
        </div>
        <div>
          <button className="Login__Google">Continua con Google</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
