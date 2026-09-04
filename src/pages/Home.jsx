import { useNavigate } from "react-router-dom";
import "../style.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="card">
        <h1 className="titulo">Olá, seja bem-vinda!</h1>

        {/* Banner de unhas decoradas */}
        <img src="/unhas.png" alt="Unhas decoradas" className="banner" />

        {/* Botões principais */}
        <button className="btn-entrar" onClick={() => navigate("/agendamento")}>
          Agendar Serviço
        </button>
        <button className="btn-outline" onClick={() => navigate("/meusagendamentos")}>
          Meus Agendamentos
        </button>
        <button className="btn-outline" onClick={() => navigate("/perfil")}>
          Meu Perfil
        </button>
      </div>

      {/* Menu inferior fixo */}
      <footer className="menu-inferior">
        <button onClick={() => navigate("/home")} className="menu-btn">🏠 Home</button>
        <button onClick={() => navigate("/meusagendamentos")} className="menu-btn">📅 Agenda</button>
        <button onClick={() => navigate("/perfil")} className="menu-btn">👤 Perfil</button>
      </footer>
    </div>
  );
}
