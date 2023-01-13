const express = require('express')
const routes = express.Router()

// get equipos
routes.get('/teams', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM teams', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

// get equipos
routes.get('/tournaments', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tournaments', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})


module.exports = routes