import { useNavigate } from "react-router-dom";
import "./PainelManicure.css";

export default function AgendamentosManicure() {
  const navigate = useNavigate();

  return (
    <div className="painel-manicure">
      <div className="painel-card">
        <h1>Meus Agendamentos</h1>

        <p>Confira os horários agendados pelas clientes.</p>

        <div>
          <p><strong>Cliente:</strong> Maria</p>
          <p><strong>Serviço:</strong> Manicure</p>
          <p><strong>Data:</strong> 10/10/2026</p>
          <p><strong>Horário:</strong> 14:00</p>
        </div>

        <button onClick={() => navigate("/painelmanicure")}>
          Voltar
        </button>
      </div>
    </div>
  );
}