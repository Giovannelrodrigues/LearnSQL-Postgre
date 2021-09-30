import express from 'express'
import ClientsRouter from './routes/cliente.route.js'
import ProductsRouter from './routes/product.route.js'
import winston from 'winston'
import SalesRouter from './routes/sale.route.js'
import SupliersRouter from './routes/Suplaiers.routes.js'
import cors from 'cors'

const { combine, timestamp, label, printf } = winston.format

const myFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}${message}`
})

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.File)({filename: 'api.log'})
    ],
    format: combine(
        label({label: "store.api"}),
        timestamp(),
        myFormat
    )
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/client', ClientsRouter)
app.use('/product', ProductsRouter)
app.use('/sales', SalesRouter)
app.use('/suplaier', SupliersRouter)
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} ${err.message}`)
    res.status(400).send({error: err.message})
})
app.listen(3000, () => {
    console.log('Api Started!')
})