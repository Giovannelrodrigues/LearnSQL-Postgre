import ClientService from '../services/client.services.js'

async function createClient(req, res, next){
    try{
        let client = req.body
        if(!client.name | !client.cpf ||  !client.phone || !client.adress || !client.email){
            throw new('Name, cpf, email, phone e adress is required')
        }
        
        res.status(200).send(await ClientService.createClient(client))
        logger.info(`POST /client - ${JSON.stringify(client)}`)
    }catch(err){
        next(err)
    }
}

async function getClientes(req, res, next){
    try{
        res.send(await ClientService.getClientes())
    }catch(err){
        next(err)
    }
}

async function getCliente(req, res, next){
    try{
        let id = req.params.id
        res.send(await ClientService.getCliente(id))
    }catch(err){
        next(err)
    }
}

async function deleteClientes(req, res, next){
    try{
        let id = req.params.id
        await ClientService.deleteClientes(id)
        res.status(200).send({msg: "deleted"})
    }catch(err){
        next(err)
    }
}

async function updateClientes(req, res, next){
    try{    
        let client = req. body
        if(!client.name | !client.cpf ||  !client.phone || !client.adress || !client.email){
            throw new('Name, cpf, email, phone e adress is required')
        }
        const response = await ClientService.updateClientes(client)
        res.status(200).send(response)
    }catch(err){
        next(err)
    }
}


export default {
    createClient,
    getClientes,
    getCliente,
    deleteClientes,
    updateClientes
}