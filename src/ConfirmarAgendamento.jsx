import { useLocation, useNavigate } from "react-router-dom";

export default function ConfirmarAgendamento() {
  const location = useLocation();
  const navigate = useNavigate();

  // Pegando os dados enviados pela tela de Agendamento
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get("data");
  const hora = queryParams.get("hora");
  const servico = queryParams.get("servico");

  const confirmar = () => {
    // Aqui você pode salvar no banco ou API futuramente
    alert("Agendamento confirmado com sucesso!");
    navigate("/meusagendamentos"); // redireciona para lista de agendamentos
  };

  return (
    <div className="container">
      <h1 className="titulo">Confirmar Agendamento</h1>
      <p><strong>Data:</strong> {data}</p>
      <p><strong>Horário:</strong> {hora}</p>
      <p><strong>Serviço:</strong> {servico}</p>

      <button onClick={confirmar}>Confirmar</button>
      <button onClick={() => navigate("/agendamento")}>Voltar</button>
    </div>
  );
}
