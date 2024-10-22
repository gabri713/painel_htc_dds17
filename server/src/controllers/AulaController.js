import { createAula, readAulas,updateAulas,deleteAulas } from "../models/AulaModel.js";

export async function CadastroAulas(req,res){
    console.log('AulaController cadastroAula')
    // criando constante aula
    const aula= req.body;
    try {
        //declarando status com o codigo da resposta e resposta com JSON
        const [status,resposta] = await createAula(aula);
        res.status(status).json(resposta);

    }catch(error){
        console.log(error);
        res.status(500).json(error);

    }
}

export async function mostrandoAulas(req, res) {
    console.log('AulaController mostrandoAulas');
    try{
        const[status,resposta] = await readAulas();
        res.status(status).json(resposta);
    }catch(error){
        console.log(error);
        res.status(500).json(error);

    }
    
}

export async function atualizandoAulas(req, res) {
    console.log('AulaController atualizandoAulas');
    const{id} = req.params;
    const aula = req.body;


    try{
        const[status,resposta] = await updateAulas(aula, id); 
        res.status(status).json(resposta);
    }catch (error){
        console.log(error);
        res.status(500).json(error);

    }
    
}

export async function excluindoAula(req,res) {
    console.log('AulaController excluindoAula');
    const{id} = req.params; 

    try{
        const[status,resposta] = await deleteAulas(aula, id); 
        res.status(status).json(resposta);
    }catch (error){
        console.log(error);
        res.status(500).json(error);

    }
    
}


export const deletandoAula = async ()=>{

}