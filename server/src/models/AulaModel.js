// importando pacote do mysql
import mysql from 'mysql2/promise';

// importando configurações de banco
import db from '../conexao.js';


// cadastrando aula
export async function createAula(aula){
    console.log('AulaModel: Create')
    const conexao = mysql.createPool(db);
    const sql = `INSEERT INTO aulas
    (data, data_hora_inicio, data_hora_fim,turma,instrutor,unidade_curricular,ambiente)
    VALUES(?,?,?,?,?,?,?)`;

    const params= [aula.data,
         aula.data_hora_inicio,
        aula.data_hora_fim,
        aula.turma,
        aula.instrutor,
        aula.unidade_curricular,
        aula.ambiente];

    try{
        const[retorno] = await conexao.query(sql,params);
        console.log('Aula Cadastrada');
        return[201, 'Aula Cadastrada'];
    }catch(error) {
        console.log('Erro ao cadastrar', error);
        return[500,error]
    }

}

// lendo aulas 
export async function readAulas() {
    console.log("AulaModel: readAulas");
    const conexao = mysql.createPool(db);

    const sql = 'SELECT * FROM aulas';

    try{
        const[retorno]= await conexao.query(sql);
        console.log('Mostrando Aulas');
        return [200, retorno];

    }catch(error){
        console.log(error);
        return[500, error];
    }
}
// Editando aula
export async function updateAula(aula,id) {
    console.log('AulaModel: updateAula');
    const conexao = mysql.createPool(db);
    const sql = `UPDATE aulas SET
        data = ?,
        data_hora_inicio = ?,
        data_hora_fim,turma = ?,
        instrutor = ?,
        unidade_curricular = ?,
        ambiente = ?
        WHERE id = ?`;

        const params = [
            aula.data,
            aula.data_hora_inicio,
            aula.data_hora_fim,
            aula.turma,
            aula.instrutor,
            aula.unidade_curricular,
            aula.ambiente,
            id,  
        ];
        try{
            const[retorno]= await conexao.query(sql);
            console.log('Atualizando Aulas');
            return [200, retorno];
    
        }catch(error){
            console.log(error);
            return[500, error];
        }
    }

    export async function deleteAula(id) {
        console.log('AulaModel: deleteAula');
       const conexao = mysql.createPool(db);
       const sql = 'DELETE FROM aulas WHERE id = ?';
       const params = [id]
       try{
        const[retorno]= await conexao.query(sql,params);
        console.log('Deletando Aula');
            return [200, retorno];
       } catch(error){
        console.log(error);
        return[500, error];
       }
    }

        