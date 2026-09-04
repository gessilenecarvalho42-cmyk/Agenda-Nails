import './Agendamento.css'; // agora o CSS está no mesmo diretório

export default function Agendamento() {
  return (
    <div className="container">
      <h1 className="titulo">Agendar Serviço</h1>
      <p className="texto">Escolha o dia e horário desejado.</p>

      <form className="form-agendamento">
        <label htmlFor="data">Data:</label>
        <input type="date" id="data" name="data" />

        <label htmlFor="hora">Horário:</label>
        <input type="time" id="hora" name="hora" />

        <label htmlFor="servico">Serviço:</label>
        <select id="servico" name="servico">
          <option value="">Selecione...</option>
          <option value="manicure">Manicure</option>
          <option value="pedicure">Pedicure</option>
          <option value="alongamento">Alongamento de unhas</option>
        </select>

        <button type="submit" className="botao-agendar">
          Confirmar Agendamento
        </button>
      </form>
    </div>
  );
}
