const express = require('express')

const router = express.Router()

const motorista = require('../controllers/controllermotoristas')
const middleware = require('../middleware/middleware')


router.post('/createMotorista',middleware.autenticacao, motorista.create)
router.get('/readMotorista', motorista.read)
router.delete('/deleteMotorista/:id',middleware.autenticacao, motorista.del)
router.put('/putMotorista/:id',middleware.autenticacao, motorista.update)

const manutencao = require('../controllers/controllerManutencoes')

router.post('/createManutencao', middleware.autenticacao, manutencao.create)
router.get('/readManutencao', manutencao.read)
router.delete('/deleteManutencao/:id' , middleware.autenticacao, manutencao.del)
router.put('/putManutencao/:id', middleware.autenticacao, manutencao.update)

const operacao = require('../controllers/controlleroperacao')

router.post("/createOperacao", middleware.autenticacao, operacao.create)
router.get("/readOperacao", operacao.read)
router.put("/putOperacao/:id", operacao.update)
router.delete("/deleteOperacao/:id", operacao.del)

const users = require('../controllers/controllerusuario')

router.post('/createUser',users.create)
router.post('/loginUser',users.login)

const frota = require('../controllers/controllerveiculo')

router.post('/createVeiculo', middleware.autenticacao, frota.create)
router.get('/readVeiculo',frota.read)
router.delete('/deleteVeiculo/:id', middleware.autenticacao, frota.del)
router.put('/putVeiculo/:id', middleware.autenticacao, frota.update)

module.exports = router