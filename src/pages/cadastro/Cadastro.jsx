import { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField" -> mesma coisa que o exemplo abaixo, porém, com destruturação:
import {
  TextField,
  Button,
  CssBaseline,
  Box,
  Container,
  Typography,
} from "@mui/material";
import api from "../../services/api"
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState (false); // Olhinho para visualizar a senha

  const [user, setUser] = useState({
    nome: "",
    email: "",
    senha: "",
  }); //setUser, vou "setar" os valores da constante 'user'

  const togglePasswordVisibility = ()=>{
    setShowPassword(!showPassword);
  }

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value }); //Mantém tudo oque está e acrescenta mais algo
    console.log(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); //Evita o recarregamento da página
    try {
      const response = await api.postUser(user);
      alert("O servidor resondeu: " + response.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <Container component={"main"} maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mt: 5, color: "#a4a4a4"}}>
          CADASTRO
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Nome"
            id="nome"
            name="nome"
            value={user.nome}
            onChange={onChange}
          />
          <TextField
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
            type={showPassword?"text":"password"}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar
          </Button>
          <Button fullWidth variant="contained" component={Link} to="/">
          Já possui conta? Faça Login</Button>
        </Box>
      </Box>
    </Container>
  );
}
