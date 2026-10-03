import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PerfilManicure.css";

export default function PerfilManicure() {
  const navigate = useNavigate();

  const [perfil, setPerfil] = useState({
    nome: "",
    celular: "",
    descricao: "",
  });

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("perfilManicure");

    if (dadosSalvos) {
      setPerfil(JSON.parse(dadosSalvos));
    }
  }, []);

  return (
    <div className="perfil-manicure">
      <div className="perfil-manicure-card">
        <h1>Meu Perfil</h1>

        <div className="dados-perfil">
          <p>
            <strong>Nome:</strong>{" "}
            {perfil.nome || "Não informado"}
          </p>

          <p>
            <strong>Celular:</strong>{" "}
            {perfil.celular || "Não informado"}
          </p>

          <p>
            <strong>Descrição:</strong>{" "}
            {perfil.descricao || "Não informado"}
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/editarperfilmanicure")}
        >
          Editar dados
        </button>

        <button
          type="button"
          className="botao-voltar"
          onClick={() => navigate("/painelmanicure")}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}