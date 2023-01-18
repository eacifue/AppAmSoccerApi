import { dbOptions } from '../db.js';
import md5 from 'md5';


export const Login = async (req, res) => {
    const {user, password} = req.body
    const [rows] = await dbOptions.query('select user from users where user = ? and password = ?',[user, md5(password)])
    if(rows.length <= 0) return res.status(404).json({
        message: "User  or Password don't exist"
    })
    res.json(rows[0])
 }
