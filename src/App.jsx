import { BrowserRouter, Routes, Route } from "react-router-dom";

import BoasVindas from "./pages/BoasVindas";
import Login from "./pages/Login";
import CadastroCliente from "./pages/CadastroCliente";
import Home from "./pages/Home";
import Agendamento from "./pages/Agendamento";
import ConfirmarAgendamento from "./pages/ConfirmarAgendamento";
import MeusAgendamentos from "./pages/MeusAgendamentos";
import Perfil from "./pages/Perfil";

import PainelManicure from "./pages/PainelManicure";
import AgendamentosManicure from "./pages/AgendamentosManicure";
import ServicosManicure from "./pages/ServicosManicure";
import AdicionarServico from "./pages/AdicionarServico";
import PerfilManicure from "./pages/PerfilManicure";
import EditarPerfilManicure from "./pages/EditarPerfilManicure";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Área da cliente */}
        <Route path="/" element={<BoasVindas />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/cadastrocliente"
          element={<CadastroCliente />}
        />

        <Route path="/home" element={<Home />} />

        <Route
          path="/agendamento"
          element={<Agendamento />}
        />

        <Route
          path="/confirmar"
          element={<ConfirmarAgendamento />}
        />

        <Route
          path="/meusagendamentos"
          element={<MeusAgendamentos />}
        />

        <Route
          path="/perfil"
          element={<Perfil />}
        />

        {/* Área da manicure */}
        <Route
          path="/painelmanicure"
          element={<PainelManicure />}
        />

        <Route
          path="/agendamentosmanicure"
          element={<AgendamentosManicure />}
        />

        <Route
          path="/servicosmanicure"
          element={<ServicosManicure />}
        />

        <Route
          path="/adicionarservico"
          element={<AdicionarServico />}
        />

        <Route
          path="/perfilmanicure"
          element={<PerfilManicure />}
        />

        <Route
          path="/editarperfilmanicure"
          element={<EditarPerfilManicure />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;