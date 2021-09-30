import express from "express";
import suplierController from '../controllers/Suplaier.controller.js'
const router = express.Router()

router.post('/', suplierController.createSuplaier)
router.get('/', suplierController.getSuplaiers)
router.get('/:id', suplierController.getSuplaier)
router.delete('/:id', suplierController.deleteSuplaier)
router.put('/', suplierController.updateSuplaier)

export default router