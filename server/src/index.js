// importando pacote express
import express from 'express';

import {cadastroAula, mostrandoAulas, atualizandoAulas,excluindoAulas} from './controllers/AulaController.js';

// instanciando objeto express
const app = express();
const porta = 5000;

// configurando comunicação em JSON
app.use(express.json());

// rotas de teste da api
app.get('/',(req,res)=>{
    res.send('API funcionando');
});

//rotas de CRUD de aula

app.post('/aulas', cadastroAula);
app.get('/aulas', mostrandoAulas);
app.put('/aulas/:id',atualizandoAulas)
app.delete('/aulas/:id',excluindoAulas);





app.listen(porta,()=>{
   console.log(`API funcionando ${porta}`);
});