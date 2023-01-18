
import express from 'express'
import teamsRoutes from './routes/teams.routes.js'
import playersRoutes from './routes/players.routes.js'
import usersRoutes from './routes/users.routes.js'
import loginRoutes from './routes/login.routes.js'
import cors from 'cors'

import { PORT} from './config.js'
//import { prototype } from 'mysql2/typings/mysql/lib/protocol/sequences/Query.js'
const app = express();
app.set('port', PORT)

//routes

app.use(express.json());
app.use(cors());
app.use('/api', teamsRoutes);
app.use('/api', playersRoutes);
app.use('/api', usersRoutes);
app.use('/api', loginRoutes);

app.use((req, res, next) => {
    res.status(404).json ({
        message: 'endpoint Not found'
    });
});
//server runing
app.listen(app.get('port'), ()=> 
    console.log('server listerin in port', app.get('port'))
);