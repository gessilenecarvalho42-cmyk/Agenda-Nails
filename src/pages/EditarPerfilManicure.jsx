import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./EditarPerfilManicure.css";

export default function EditarPerfilManicure() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [descricao, setDescricao] = useState("");

  function salvarAlteracoes() {
    localStorage.setItem(
      "perfilManicure",
      JSON.stringify({
        nome,
        celular,
        descricao,
      })
    );

    navigate("/perfilmanicure");
  }

  return (
    <div className="editar-perfil-manicure">
      <div className="editar-perfil-card">
        <h1>Editar Perfil</h1>

        <div className="form-perfil">
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label>Celular</label>
          <input
            type="tel"
            placeholder="Digite seu celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />

          <label>Descrição</label>
          <textarea
            placeholder="Digite uma descrição sobre seus serviços"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <button type="button" onClick={salvarAlteracoes}>
            Salvar alterações
          </button>

          <button
            type="button"
            className="botao-voltar"
            onClick={() => navigate("/perfilmanicure")}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}