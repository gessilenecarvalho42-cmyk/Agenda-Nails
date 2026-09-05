import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ConfirmarAgendamento.css";

export default function ConfirmarAgendamento() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/"); // volta para Home
  };

  return (
    <div className="container-confirmacao">
      <div className="card-confirmacao">
        <h1 className="titulo">Confirmação de Agendamento</h1>

        {/* Mensagem com ícone rosa */}
        <p className="mensagem-sucesso">
          <FaCheckCircle className="icone-validacao" />
          Seu horário foi agendado com sucesso!
        </p>

        {/* Informações em estilo mais profissional */}
        <div className="info-agendamento">
          <div className="linha-info">
            <span className="label">Serviço:</span>
            <span className="valor">Alongamento de unhas</span>
          </div>
          <div className="linha-info">
            <span className="label">Data:</span>
            <span className="valor">10/09/2026</span>
          </div>
          <div className="linha-info">
            <span className="label">Horário:</span>
            <span className="valor">14:00</span>
          </div>
          <div className="linha-info">
            <span className="label">Profissional:</span>
            <span className="valor">Gessilene Carvalho</span>
          </div>
        </div>

        {/* Botão */}
        <button className="botao-voltar" onClick={handleVoltar}>
          Voltar para Home
        </button>
      </div>
    </div>
  );
}

