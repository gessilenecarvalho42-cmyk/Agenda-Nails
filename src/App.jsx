import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoasVindas from "./pages/BoasVindas";
import Login from "./pages/Login";
import CadastroCliente from "./pages/CadastroCliente";
import Home from "./pages/Home";
import Agendamento from "./pages/Agendamento";
import ConfirmarAgendamento from "./pages/ConfirmarAgendamento";
import MeusAgendamentos from "./pages/MeusAgendamentos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoasVindas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrocliente" element={<CadastroCliente />} />
        <Route path="/home" element={<Home />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/confirmar" element={<ConfirmarAgendamento />} />
        <Route path="/meusagendamentos" element={<MeusAgendamentos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;








