import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

function TarefaDetalhe() {
  const { id_tarefa } = useParams();
  const [tarefa, setTarefa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [setFormData] = useState({ ID_user: data.userId, id: data.id,   title: data.title, completed: data.completed });

  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/:${id_tarefa}`).then((res) => {
      const data = response.data.tarefa[0];
                setTarefa(data);
                setFormData({ ID_user: data.userId, id: data.id,   title: data.title, completed: data.completed });

      setLoading(false);
    });
  }, [id_tarefa]);

  if (loading) return <p>Carregando tarefa...</p>;
  return (
    <div>
      <h2>Tarefa</h2>
      {tarefa.map((tarefa) => (
        <div style={{display: "flex", justifyContent:"left"}} key={tarefa.id_tarefa}>
          <span>{tarefa.id}</span>
          <span>{tarefa.title}</span>
          <span>{tarefa.completed ? "" : ""}</span>

        </div>
      ))}
        <Button onClick={() => navigate("/tarefas")} fullWidth>Voltar para Tarefas</Button>
    </div>
  );
}

export default TarefaDetalhe;