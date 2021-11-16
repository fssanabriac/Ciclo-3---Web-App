import { Link } from "react-router-dom";
import Logo from "components/logo";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [Nombre, setNombre] = useState("");
  const [Apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };
  const handleApellidosChange = (event) => {
    setApellidos(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Usuario registrado, pendiente por aprobación!");
    setTimeout(() => ""
    , 1000);
  };
  return (
    <div className="Register__container">
      <div className="Register_login_header">
        <Link className="Register_login__logo" to="/">
          <Logo />
        </Link>
      </div>
      <h2 className="register_title">Registrate!</h2>
      <form action="" className="Register__form" >
        <div className="Register__inputs">
          <input
            type="text"
            placeholder="Nombre"
            required
            onChange={handleNombreChange}
            value={Nombre}
          />
          <input
            type="text"
            placeholder="Apellidos"
            required
            onChange={handleApellidosChange}
            value={Apellidos}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            required
            onChange={handleEmailChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <div className="notifications_check">
          <label htmlFor="Notifications_check">
            <input type="checkbox" name="Notify_me" />
            Recibir notificaciones
          </label>
        </div>
        <div>
          <button
            className="Register__submit"
            type="submit"
            onClick={handleSubmit}
            disabled={!Nombre || !Apellidos || !email || !password}
          >
            Registrar
          </button>
          <ToastContainer />
        </div>
        <div className="Register__login">
          <span>¿Ya tienes cuenta?</span>
          <Link className="Register__login_link" to="/login">
            <div className="login_redirect">Ingresa aqui</div>
          </Link>
        </div>
        <div>
          <button className="Login__Google">Registrarse con Google</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
