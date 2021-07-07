import { Router, Request, Response } from "express";
import { GerenciamentoController } from "../controller/GerenciamentoController";

const router = Router( );
const gerenciamentoController = new GerenciamentoController();

router.post("/computador/cadastrar", gerenciamentoController.cadastrar);

router.get("/computador/listar", gerenciamentoController.listar);

router.delete("/computador/remover/:id", gerenciamentoController.remover);

export { router };