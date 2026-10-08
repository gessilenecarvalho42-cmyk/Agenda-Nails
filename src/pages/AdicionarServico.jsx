import { useNavigate } from "react-router-dom";
import "./AdicionarServico.css";

export default function AdicionarServico() {
  const navigate = useNavigate();

  return (
    <div className="adicionar-servico">
      <div className="adicionar-servico-card">
        <h1>Adicionar Serviço</h1>

        <p className="subtitulo">
          Cadastre um novo serviço oferecido pela manicure.
        </p>

        <div className="form-servico">
          <label>Nome do serviço</label>
          <input
            type="text"
            placeholder="Digite o nome do serviço"
          />

          <label>Descrição</label>
          <textarea
            placeholder="Digite a descrição do serviço"
          />

          <label>Preço</label>
          <input
            type="number"
            placeholder="Digite o preço"
            step="0.01"
          />

          <label>Duração</label>
          <input
            type="text"
            placeholder="Ex.: 60 minutos"
          />

          <button
            type="button"
            onClick={() => navigate("/servicosmanicure")}
          >
            Salvar serviço
          </button>

          <button
            type="button"
            className="botao-voltar"
            onClick={() => navigate("/servicosmanicure")}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}