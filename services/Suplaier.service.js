import SuplaierRepository from '../repositories/Suplaier.repository.js'

async function createSuplaier(suplaier){
    return await SuplaierRepository.insertSuplaier(suplaier)
}

async function getSuplaiers(){
    return await SuplaierRepository.getSuplaiers()
}

async function getSuplaier(id){
    return await SuplaierRepository.getSuplaier(id)
}

async function deleteSuplaier(id){
    return await SuplaierRepository.deleteSuplaier(id)
}

async function updateSuplaier(suplaier){
    return await SuplaierRepository.updateSuplaier(suplaier)
}

export default {
    createSuplaier,
    getSuplaiers,
    getSuplaier,
    deleteSuplaier,
    updateSuplaier
}