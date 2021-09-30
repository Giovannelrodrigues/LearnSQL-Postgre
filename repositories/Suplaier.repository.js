//Connection with db
import { connect } from './db.js'

//Insert
async function insertSuplaier(suplaier){
    const conn = await connect();
    try{
        const sql = `INSERT INTO suplaiers (name, cnpj, phone, email, adress) VALUES ($1, $2, $3 , $4, $5) RETURNING *`
        const values = [suplaier.name, suplaier.cnpj, suplaier.phone, suplaier.email, suplaier.adress]
        const res = await conn.query(sql, values)
        return res.rows[0] 
    }catch(err){
        throw err
    }finally{
        conn.release()
    }
}


async function getSuplaiers(){
    const conn = await connect()
    try{
        const res = await conn.query('SELECT * FROM suplaiers')
        return res.rows
    }catch(err){
        throw err
    }finally{
        conn.release()
    }
}

async function getSuplaier(id){
    const conn = await connect()
    try{
        const res = await conn.query('SELECT * FROM suplaiers WHERE suplaier_id = $1', [id])
        return res.rows[0]
    }catch(err){
        throw err
    }finally{
        conn.release()
    }
}

async function updateSuplaier(suplaiers){
    const conn = await connect()
    try{
        const sql = `UPDATE suplaiers SET name = $1, cnpj = $2, phone = $3 , email = $4 , adress = $5 WHERE suplaier_id = $6 RETURNING *`
        const values = [suplaiers.name, suplaiers.cnpj, suplaiers.phone, suplaiers.email ,suplaiers.adress, suplaiers.id]
        const response = await conn.query(sql, values)
        return response.rows[0]
    }catch(err){
        throw err
    }finally{
        conn.release()
    }
}

async function deleteSuplaier(id){
    const conn = await connect()
    try{
        conn.query(`DELETE FROM suplaiers WHERE suplaier_id = $1`, [id])
    }catch(err){
        throw err
    }finally{
        conn.release()
    }
}

export default {
    insertSuplaier,
    deleteSuplaier,
    updateSuplaier,
    getSuplaiers,
    getSuplaier
}