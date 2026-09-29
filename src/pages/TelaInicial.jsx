import { useNavigate } from "react-router-dom";
import "./TelaInicial.css";

export default function TelaInicial() {
  const navigate = useNavigate();

  return (
    <div className="tela-inicial">
      <div className="card">
        <img
          src="/esmalte.png"
          alt="Esmalte"
          className="logo"
        />

        <h1>Agenda Nails</h1>

        <p>Agende seu horário com praticidade.</p>

        <button
          className="btn"
          onClick={() => navigate("/login")}
        >
          Entrar
        </button>

        <button
          className="btn-outline"
          onClick={() => navigate("/cadastrocliente")}
        >
          Criar conta
        </button>
      </div>
    </div>
  );
}
