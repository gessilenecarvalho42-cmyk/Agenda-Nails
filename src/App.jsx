import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoasVindas from "./pages/BoasVindas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoasVindas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



