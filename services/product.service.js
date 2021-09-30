import ProductRepository from '../repositories/product.repository.js'
import SuplaierRepository from '../repositories/Suplaier.repository.js'

async function createProduct(product){
    if(!await SuplaierRepository.getSuplaier(product.suplaier_id)){
        throw new Error('O Suplaier ID informado, é invalido')
    }else{
        return await ProductRepository.insertProduct(product)
    }
}

async function getProducts(){
    return await ProductRepository.getProducts()
}

async function getProduct(id){
    return await ProductRepository.getProduct(id)
}

async function deleteProduct(id){
    return await ProductRepository.deleteProduct(id)
}

async function updateProduct(product){
    if(!await SuplaierRepository.getSuplaier(product.suplaier_id)){
        throw new Error('O Suplaier ID informado, é invalido')
    }else{
        return await ProductRepository.updateProduct(product)
    }
}

export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}