import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{mt: 0.2, mb: 2}}>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{display: "flex", width: "100vw", justifyContent: "center", gap: 12}}>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/tarefas");
            }}
            sx={{ backgroundColor: "purple" }}
          >
            Tarefas
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/usuarios");
            }}
            sx={{ backgroundColor: "Blue" }}
          >
            Usuários
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "green" }}
            onClick={() => {
              navigate("/posts");
            }}
          >
            Posts
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "orange", color: "white" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
