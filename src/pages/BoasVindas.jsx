import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

function BoasVindas() {
  const navigate = useNavigate();

  return (
    <div className="boas-vindas">
      {/* Logo do esmalte */}
      <img src="/esmalte.png" alt="Logo Agenda Nails" className="logo" />

      {/* Nome do App */}
      <h1 className="titulo">Agenda Nails </h1>

      {/* Frase de boas-vindas */}
      <p className="frase">Agende seu horário com praticidade!</p>

      {/* Botão principal */}
      <button className="btn-entrar" onClick={() => navigate("/home")}>
        Entrar
      </button>

      {/* Link pequeno abaixo */}
      <p className="link-criar-conta" onClick={() => navigate("/cadastro")}>
        Criar conta
      </p>
    </div>
  );
}

export default BoasVindas;






