import SuplaierService from '../services/Suplaier.service.js'

async function createSuplaier(req, res, next){
    try{
        let suplaier = req.body
        if(!suplaier.name | !suplaier.cnpj ||  !suplaier.phone || !suplaier.adress || !suplaier.email){
            throw new('Name, cnpj, email, phone e adress is required')
        }
        
        res.status(200).send(await SuplaierService.createSuplaier(suplaier))
        logger.info(`POST /suplaier - ${JSON.stringify(suplaier)}`)
    }catch(err){
        next(err)
    }
}

async function getSuplaiers(req, res, next){
    try{
        res.send(await SuplaierService.getSuplaiers())
    }catch(err){
        next(err)
    }
}

async function getSuplaier(req, res, next){
    try{
        let id = req.params.id
        res.send(await SuplaierService.getSuplaier(id))
    }catch(err){
        next(err)
    }
}

async function deleteSuplaier(req, res, next){
    try{
        let id = req.params.id
        await SuplaierService.deleteSuplaier(id)
        res.status(200).send({msg: "deleted"})
    }catch(err){
        next(err)
    }
}

async function updateSuplaier(req, res, next){
    try{    
        let suplaier = req.body
        if(!suplaier.name | !suplaier.cnpj ||  !suplaier.phone || !suplaier.adress || !suplaier.email){
            throw new('Name, cnpj, email, phone e adress is required')
        }
        const response = await SuplaierService.updateSuplaier(suplaier)
        res.status(200).send(response)
    }catch(err){
        next(err)
    }
}


export default {
    updateSuplaier,
    deleteSuplaier,
    getSuplaier,
    getSuplaiers,
    createSuplaier
}