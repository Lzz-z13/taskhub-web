import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  CssBaseline,
  Box,
  Container,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", senha: "" });
  const [erro, setErro] = useState("");


  useEffect(()=>{
    getRefreshToken();
  },[])

  const getRefreshToken = () =>{
    const messageToken = localStorage.getItem('refreshToken')
    if(messageToken){
      showAlert("info", messageToken);
    }
  }

  const navigate = useNavigate();
  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    try {
      const response = await api.postLogin(user);
      showAlert("sucess", response.data.message);
      localStorage.setItem("token", response.data.token);
      return navigate("/home");
    } catch (error) {
      showAlert("error", error.response.data.error);
    }
  };

  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const showAlert = (severity, message) => {
    setAlert({ open: true, severity, message });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseAlert} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mt: 5, color: "#a4a4a4"}}>
          Bem-vindo - LOGIN
        </Typography>
        <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit} noValidate>
          <TextField
            type=""
            margin="normal"
            required
            fullWidth
            label="Email"
            id="email"
            name="email"
            value={user.email}
            onChange={onChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Senha"
            id="senha"
            name="senha"
            value={user.senha}
            onChange={onChange}
            type="password"
          />
          {erro && <p style={{ color: "red" }}>{erro}</p>}
          <Button type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
            Entrar
          </Button>
          <Button fullWidth variant="contained" component={Link} to="/cadastro">
            Cadastro
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
