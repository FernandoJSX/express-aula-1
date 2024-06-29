const express = require("express");
const app = express();
const port = 8000;

const tarefaRoutes=require("./src/routes/tarefasRoutes");

app.use(express.json()); // Middleware para analisar JSON no corpo da requisição

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.get("/boas-vindas", (req, res) => {
  res.send("Seja bem-vindo!");
});

app.get("/boas-vindas/:nome", (req, res) => {
  res.send(`Seja bem-vindo(a) ${req.params.nome}`);
});

app.get("/boas-vindas/:nome/:cidade", (req, res) => {
  res.send(
    `Seja bem-vindo(a) ${req.params.nome} da cidade ${req.params.cidade}`
  );
});

app.get("/alunos", (req, res) => {
  let alunos = ["Nathan", "Brunno", "Afonso", "Fernando"];
  res.send(alunos);
});

app.post("/login", (req, res) => {
  if (!req.body || !req.body.email) {
    return res.status(400).send("E-mail é obrigatório");
  }

  if (!req.body || !req.body.senha) {
    return res.status(400).send("Senha é obrigatória");
  }

  if (req.body.email == "fernandojsx@gmail.com" && req.body.senha == "123456") {
    res.send("Acesso concedido");
  } else {
    res.status(401).send("E-mail ou senha inválidos");
  }
});

app.use('/tarefas', tarefaRoutes);

app.all("*", (req, res) => {
  res.status(404).send("Página não encontrada");
});

app.listen(port, () => {
  console.log(`Serviço online em: http://localhost:${port}`);
});
