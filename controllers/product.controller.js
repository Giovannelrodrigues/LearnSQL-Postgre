import ProductService from '../services/product.service.js'

async function createProduct(req, res, next){
    try{
        let product = req.body
        if(!product.name | !product.description ||  !product.value || !product.stock || !product.suplaier_id){
            throw new Error('Name, description, value, stock e suplaier_id is required')
        }
        
        res.status(200).send(await ProductService.createProduct(product))
        logger.info(`POST /product - ${JSON.stringify(product)}`)
    }catch(err){
        next(err)
    }
}

async function getProducts(req, res, next){
    try{
        res.send(await ProductService.getProducts())
    }catch(err){
        next(err)
    }
}

async function getProduct(req, res, next){
    try{
        let id = req.params.id
        res.send(await ProductService.getProduct(id))
    }catch(err){
        next(err)
    }
}

async function deleteProduct(req, res, next){
    try{
        let id = req.params.id
        await ProductService.deleteProduct(id)
        res.status(200).send({msg: "deleted"})
    }catch(err){
        next(err)
    }
}

async function updateProduct(req, res, next){
    try{    
        let product = req.body
        if(!product.product_id || !product.name | !product.description ||  !product.value || !product.stock || !product.suplaier_id){
            throw new Error('Product ID, name, description, value, stock e suplaier_id is required')
        }
        const response = await ProductService.updateProduct(product)
        res.status(200).send(response)
    }catch(err){
        next(err)
    }
}


export default {
    updateProduct,
    deleteProduct,
    getProduct,
    getProducts,
    createProduct
}