
import express from 'express'
import teamsRoutes from './routes/teams.routes.js'
import playersRoutes from './routes/players.routes.js'
import { PORT} from './config.js'
const app = express();
app.set('port', PORT)

app.use(express.json());
app.use('/api', teamsRoutes);
app.use('/api', playersRoutes);

app.use((req, res, next) => {
    res.status(404).json ({
        message: 'endpoint Not found'
    });
});
//server runing
app.listen(app.get('port'), ()=> 
    console.log('server listerin in port', app.get('port'))
);