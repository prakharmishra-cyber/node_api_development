import express from 'express';
import cors from 'cors';
import peopleRoutes from './routes/peopleRoutes.js';
import connection from './db.js';
import colors from 'colors';

const PORT  = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.status(200).json({
        message:'Everything is working perfectly'
    });
});

app.use('/people',  peopleRoutes);

app.listen(PORT, ()=> {
    connection();
    console.log('We are up and running');
});