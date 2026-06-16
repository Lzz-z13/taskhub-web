import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

function Tarefas() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data.slice(0, 10));

      setLoading(false);
    });
  }, []);

  if (loading) return <p>Carregando Posts...</p>;
  return (
    <div>
      <Navbar></Navbar>
      <h2>Lista de Posts</h2>
      {posts.map((post) => (
        <div style={{ display:"flex", flexDirection: "column", justifyContent:"space-between", alignItems:"start "}} key={post.id}>
          <span>{"ID do usuário: " + post.userId}</span>
          <span>{"ID do Post: " +post.id}</span>
          <span>{"Título: " + post.title}</span>
          <span>{"Conteúdo: " + post.body}</span>
        </div>
      ))}
        <Button onClick={() => navigate("/home")} fullWidth sx={{backgroundColor:"white", 
            mt:3,
            mb:3}}>Voltar</Button>
    </div>
  );
}

export default Tarefas;
