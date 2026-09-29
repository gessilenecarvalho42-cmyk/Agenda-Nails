import { useNavigate } from "react-router-dom";
import "./PainelManicure.css";

export default function PainelManicure() {
  const navigate = useNavigate();

  return (
    <div className="painel-manicure">
      <div className="painel-card">
        <h1>Olá, Manicure!</h1>

        <p>Gerencie seus agendamentos e serviços.</p>

        <button onClick={() => navigate("/agendamentosmanicure")}>
          Meus agendamentos
        </button>

        <button onClick={() => navigate("/servicosmanicure")}>
          Meus serviços
        </button>

        <button onClick={() => navigate("/perfilmanicure")}>
          Meu perfil
        </button>

        <button
          className="botao-sair"
          onClick={() => navigate("/")}
        >
          Sair
        </button>
      </div>
    </div>
  );
}