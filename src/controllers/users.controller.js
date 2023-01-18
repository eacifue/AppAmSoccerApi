import { dbOptions } from '../db.js';
import md5 from 'md5';

//get All Users
export const getUsers = async(req, res) => {
    const [rows] = await dbOptions.query('SELECT Id, user, password, IdRole from users')
    res.json(rows)
 }
 
 //get users by id
 export const getUserById = async (req, res) => {
     
     const [rows] = await dbOptions.query('select  Id, user, password, IdRole from users where Id = ?',[req.params.id])
     if(rows.length <= 0) return res.status(404).json({
         message: 'Team not found'
     })
     res.json(rows[0])
  }

 export const createUser = async (req, res) => {
    const {user, password, IdRole} = req.body
    const [rows] = await dbOptions.query('insert into users (user, password, IdRole) VALUES (?, ?, ?)', [user, md5(password), IdRole])
    res.send({ rows })
 }