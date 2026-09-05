import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MeusAgendamentos.css';

export default function MeusAgendamentos() {
  const navigate = useNavigate();

  const agendamentos = [
    { servico: "Alongamento de unhas", data: "10/09/2026", horario: "14:00", status: "Confirmado" },
    { servico: "Manicure", data: "12/09/2026", horario: "09:30", status: "Confirmado" }
  ];

  return (
    <div className="container-agendamento">
      <div className="card-agendamento">
        <h1 className="titulo">Meus Agendamentos</h1>
        <p>Veja seus horários marcados.</p>

        {agendamentos.map((item, index) => (
          <div key={index} className="agendamento-item">
            <h3>{item.servico}</h3>
            <p>Data: {item.data}</p>
            <p>Horário: {item.horario}</p>
            <p>Status: {item.status}</p>
            <div className="acoes">
              <button className="btn-reagendar">Reagendar</button>
              <button className="btn-cancelar">Cancelar</button>
            </div>
          </div>
        ))}

        <button className="btn-voltar" onClick={() => navigate('/')}>
          Voltar para Home
        </button>
      </div>
    </div>
  );
}

