import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <button
          onClick={handleLogout}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          Logout
        </button>
      </div>

      <h1>Bem-vindo ao TaskHub!</h1>

      <Button
        sx={{ mt: 3, mb: 2, backgroundColor: "white" }}
        component={Link}
        to="/tarefas"
      >
        Lista de Tarefas
      </Button>

      <Button
        sx={{ margin: 1, mt: 3, mb: 2, backgroundColor: "white" }}
        component={Link}
        to="/usuarios"
      >
        Lista de Usuários
      </Button>

      <Button
        sx={{ mt: 3, mb: 2, backgroundColor: "white" }}
        component={Link}
        to="/posts"
      >
        Lista de Posts
      </Button>

    </div>
  );
}
export default Home;
