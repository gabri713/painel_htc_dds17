import { createAula } from "../models/AulaModel.js";

export async function CadastroAulas(req,res){
    const aula= req.body;
    try {
        const [status,resposta] = await createAula(aula);
        res.status(status).json(resposta);

    }catch(error){
        res.status(500).json(error);

    }
}