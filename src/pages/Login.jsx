import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style.css";

export default function Login() {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState("cliente");

  function fazerLogin() {
    if (tipoUsuario === "cliente") {
      navigate("/home");
    } else {
      navigate("/painelmanicure");
    }
  }

  return (
    <div className="login">
      <div className="card">
        <h1 className="titulo">Login</h1>

        <label className="label">Celular</label>
        <input
          type="tel"
          placeholder="Digite seu celular"
          className="input"
        />

        <label className="label">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="input"
        />

        <label className="label">Entrar como:</label>

        <select
          className="input"
          value={tipoUsuario}
          onChange={(e) => setTipoUsuario(e.target.value)}
        >
          <option value="cliente">Cliente</option>
          <option value="manicure">Manicure</option>
        </select>

        <button className="btn-entrar" onClick={fazerLogin}>
          Fazer Login
        </button>
      </div>
    </div>
  );
}

