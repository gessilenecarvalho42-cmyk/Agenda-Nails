import { useNavigate } from "react-router-dom";
import "../style.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="card">
        <h1 className="titulo">Login</h1>

        <label className="label">Celular</label>
        <input type="tel" placeholder="Digite seu celular" className="input" />

        <label className="label">Senha</label>
        <input type="password" placeholder="Digite sua senha" className="input" />

        <button className="btn-entrar" onClick={() => navigate("/home")}>
          Fazer Login
        </button>
      </div>
    </div>
  );
}


