import { useNavigate } from "react-router-dom";
import "./ServicosManicure.css";

export default function ServicosManicure() {
  const navigate = useNavigate();

  return (
    <div className="servicos-manicure">
      <div className="servicos-card">
        <h1>Meus Serviços</h1>

        <p className="subtitulo">
          Cadastre e gerencie os serviços oferecidos.
        </p>

        <button
          className="botao-adicionar"
          onClick={() => navigate("/adicionarservico")}
        >
          Adicionar serviço
        </button>

        <div className="lista-servicos">
          <h2>Serviços cadastrados</h2>

          <p>Nenhum serviço cadastrado.</p>
        </div>

        <button
          className="botao-voltar"
          onClick={() => navigate("/painelmanicure")}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}