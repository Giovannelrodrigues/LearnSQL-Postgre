import ClientRepository from '../repositories/client.repository.js'

async function createClient(client){
    return await ClientRepository.insertClient(client)
}

async function getClientes(){
    return await ClientRepository.getClientes()
}

async function getCliente(id){
    return await ClientRepository.getCliente(id)
}

async function deleteClientes(id){
    return await ClientRepository.deleteClientes(id)
}

async function updateClientes(client){
    return await ClientRepository.updateClientes(client)
}

export default {
    createClient,
    getClientes,
    getCliente,
    deleteClientes,
    updateClientes
}