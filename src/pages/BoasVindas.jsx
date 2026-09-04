import { useNavigate } from "react-router-dom";
import "../style.css";

export default function BoasVindas() {
  const navigate = useNavigate();

  return (
    <div className="boas-vindas">
      <div className="card">
        <img src="/esmalte.png" alt="Esmalte rosa" className="logo" />
        <h1 className="titulo">Agenda Nails </h1>
        <p className="frase">Agende seu horário com praticidade!</p>

        <button className="btn-entrar" onClick={() => navigate("/login")}>
          Entrar
        </button>
        <button className="btn-outline" onClick={() => navigate("/cadastrocliente")}>
          Criar conta
        </button>
      </div>
    </div>
  );
}





