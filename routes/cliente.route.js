import express from "express";
import clientController from "../controllers/client.controller.js";
const router = express.Router()

router.post('/', clientController.createClient)
router.get('/', clientController.getClientes)
router.get('/:id', clientController.getCliente)
router.delete('/:id', clientController.deleteClientes)
router.put('/', clientController.updateClientes)

export default router