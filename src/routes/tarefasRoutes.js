const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("lista as tarefas");
});

router.get("/:id", (req, res) => {
  res.send("lista uma tarefa");
});
router.post("/", (req, res) => {
  res.send("cria uma tarefa");
});
router.put("/:id", (req, res) => {
  res.send("edita uma tarefa");
});
router.delete("/:id", (req, res) => {
  res.send("deleta uma tarefa");
});

module.exports = router;
