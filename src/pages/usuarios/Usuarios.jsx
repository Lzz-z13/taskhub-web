import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsuarios(res.data.slice(0, 20));

      setLoading(false);
    });
  }, []);

  if (loading) return <p>Carregando usuarios...</p>;
  return (
    <div>
      <Navbar></Navbar>
      <h2>Lista de Usuários</h2>
      {usuarios.map((user) => (
        <div>
          <div
            style={{ display:"flex", flexDirection: "column", justifyContent:"space-between", alignItems:"start " }}
            key={user.id}
          >
            <span>{"Name: " + user.name}</span>
            <span>{"Email: " + user.email}</span>
            <span>{"Telefone: " + user.phone}</span>
            <span>{"Cidade: " + user.address.city}</span>
          </div>
          <br/>
        </div>
      ))}
      <Button
        onClick={() => navigate("/home")}
        fullWidth
        sx={{ backgroundColor: "white", mt: 3, mb: 3 }}
      >
        Voltar
      </Button>
    </div>
  );
}

export default Usuarios;
