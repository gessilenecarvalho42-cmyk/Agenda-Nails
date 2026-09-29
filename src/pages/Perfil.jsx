import { useNavigate } from "react-router-dom";
import "./Perfil.css";

function Perfil() {
  const navigate = useNavigate();

  function editarDados() {
    navigate("/cadastrocliente");
  }

  function sair() {
    navigate("/");
  }

  return (
    <div className="perfil-container">
      <div className="perfil-card">

        <h2>Meu Perfil</h2>

        <div className="perfil-info">
          <p><strong>Nome:</strong> Cliente</p>
          <p><strong>Celular:</strong> (00) 00000-0000</p>
        </div>

        <div className="perfil-botoes">
          <button className="perfil-btn" onClick={editarDados}>
            Editar dados
          </button>

          <button className="perfil-btn-outline" onClick={sair}>
            Sair
          </button>
        </div>

      </div>
    </div>
  );
}

export default Perfil;