import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTarefas(res.data.slice(0, 20));

      setLoading(false);
    });
  }, []);

  if (loading) return <p>Carregando tarefas...</p>;
  return (
    <div>
      <Navbar></Navbar>
      <h2>Lista de Tarefas</h2>
      {tarefas.map((tarefa) => (
        <div style={{display: "flex", justifyContent:"left"}} key={tarefa.id}>
          <span>{tarefa.completed ? "" : ""}</span>
          <span>{tarefa.title}</span>

          <button style={{margin:3, marginLeft: 10}} onClick={() => navigate(`/tarefas/${tarefa.id}`)}>
            Ver detalhes
          </button>
        </div>
      ))}
        <Button onClick={() => navigate("/home")} fullWidth sx={{backgroundColor:"white", 
            mt:3,
            mb:3}}>Voltar</Button>
    </div>
  );
}

export default Tarefas;
