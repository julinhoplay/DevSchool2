import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());


app.get('/matricula', async (req, resp) => {  
    try {
        let alunos = await db.tb_matricula.findAll();
        resp.send(alunos);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.post('/matricula', async(req, resp) => {
    try {
        let alunos = req.body;
        let r = await db.tb_matricula.create({
            nm_
        })
    }
    
})



app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))