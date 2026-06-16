import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
// import Home from "./pages/home/Home";
// import Tarefas from "./pages/tarefas/Tarefas";
// import TarefaDetalhe from "./pages/tarefaDetalhe/TarefaDeatlhe";
// import Usuarios from "./pages/usuarios/Usuarios";
// import Posts from "./pages/posts/Posts";
import ProtectedRoute from "./components/ProtectedRoute/ProtetedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/* <Route path="/tarefas" element={<Tarefas />} /> */}
        {/* <Route path="/tarefas/:id" element={<TarefaDetalhe />} /> */}
        {/* <Route path="/usuarios" element={<Usuarios />} /> */}
        {/* <Route path="/posts" element={<Posts />} /> */}
        {/* <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;