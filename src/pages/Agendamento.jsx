import { useNavigate } from "react-router-dom";
import "./Agendamento.css";

export default function Agendamento() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target[0].value;
    const hora = e.target[1].value;
    const servico = e.target[2].value;
    navigate(`/confirmar?data=${data}&hora=${hora}&servico=${servico}`);
  };

  return (
    <div className="container-agendamento">
      <div className="card-agendamento">
        <div className="formulario-agendamento">
          <h1 className="titulo">Agendar Serviço</h1>

          {/* Imagem maior abaixo do título */}
          <div className="imagem-agendamento">
            <img src="/unhas.png" alt="Unhas decoradas" />
          </div>

          <form onSubmit={handleSubmit}>
            <label>Data:</label>
            <input type="date" />

            <label>Horário:</label>
            <input type="time" />

            <label>Serviço:</label>
            <select>
              <option value="">Selecione...</option>
              <option value="manicure">Manicure</option>
              <option value="pedicure">Pedicure</option>
              <option value="alongamento">Alongamento de unhas</option>
            </select>

            <button type="submit">Confirmar</button>
          </form>
        </div>
      </div>
    </div>
  );
}



