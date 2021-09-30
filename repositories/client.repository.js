//Connection with db
import { connect } from './db.js'

//Insert
async function insertClient(client){
    const conn = await connect();
    try{
        const sql = `INSERT INTO clientes (name, cpf, phone, email, adress) VALUES ($1, $2, $3 , $4, $5) RETURNING *`
        const values = [client.name, client.cpf, client.phone, client.email, client.adress]
        const res = await conn.query(sql, values)
        return res.rows[0] 
    }catch(err){
        throw err
    }finally{
        conn.release()
    }
}


async function getClientes(){
    const conn = await connect()
    try{
        const res = await conn.query('SELECT * FROM clientes')
        return res.rows
    }catch(err){
        throw err
    }finally{
        conn.release()
    }
}

async function getCliente(id){
    const conn = await connect()
    try{
        const res = await conn.query('SELECT * FROM clientes WHERE cliente_id = $1', [id])
        return res.rows[0]
    }catch(err){
        throw err
    }finally{
        conn.release()
    }
}

async function updateClientes(client){
    const conn = await connect()
    try{
        const sql = `UPDATE clientes SET name = $1, cpf = $2, phone = $3 , email = $4 , adress = $5 WHERE cliente_id = $6 RETURNING *`
        const values = [client.name, client.cpf, client.phone, client.email ,client.adress, client.id]
        const response = await conn.query(sql, values)
        return response.rows[0]
    }catch(err){
        throw err
    }finally{
        conn.release()
    }
}

async function deleteClientes(id){
    const conn = await connect()
    try{
        conn.query(`DELETE FROM clientes WHERE client_id = $1`, [id])
    }catch(err){
        throw err
    }finally{
        conn.release()
    }
}

export default {
    insertClient,
    deleteClientes,
    updateClientes,
    getCliente,
    getClientes
}