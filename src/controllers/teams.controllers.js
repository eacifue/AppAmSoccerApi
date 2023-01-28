import { dbOptions } from '../db.js';


//get All Teams
export const getTeams = async(req, res) => {
   const [rows] = await dbOptions.query('select * from teams')
   res.json(rows)
}

//get team by id
// export const getTeam = async (req, res) => {
    
//     const [rows] = await dbOptions.query('select * from teams where Id = ?',[req.params.id])
//     if(rows.length <= 0) return res.status(404).json({
//         message: 'Team not found'
//     })
//     res.json(rows[0])
//  }

 //create a team
export const createTeam = async (req, res) => {
    const {IdTournaments, Name} = req.body
    const [rows] = await dbOptions.query('insert into teams (IdTournaments, Name) VALUES (?, ?)', [IdTournaments, Name])
    res.send({ rows })
 }


 //get Teams by Tournaments
export const getTeamsByTournaments = async(req, res) => {
    const [rows] = await dbOptions.query('call TeamsByTournament (?)', [req.params.id])
    res.json(rows)
 }
 