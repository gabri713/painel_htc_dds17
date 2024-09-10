import { useEffect,useState } from "react";
function Saudacao(){

    // criando estado de saudação
    const [saudacaoPeriodo, setSaudacaoPeriodo]= useState('');

    //criando texto de saudação
    function atualizaSaudacao(){
        const agora = new Date();

        //obtendo hora em inteiro exemplo 21:15 retorna 21
        const hora = agora.getHours();

        //obtendo o dia da semana em inteiro iniciando em domingo como 0 e sabado como 6
        const dia = agora.getDay();

        //declarando variavel texto saudacao
        let textoSaudacao = '';

        //definindo array dias da semana 
        const diaSemana= ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira', 'sabado'

        ];

        // adicionando o dia da semana ao textoSaudacao
        textoSaudacao+= diaSemana[dia];

        if(hora>=18){
            textoSaudacao += ' - Boa Noite !'
        } else if (hora>=12){
            textoSaudacao += ' - Boa Tarde !'
        }else if (hora>=6){
            textoSaudacao += ' - Boa Dia !'
        }else{
            textoSaudacao += 'Boa Madrugada'
        }

        setSaudacaoPeriodo(textoSaudacao);

    }
    return(
        <h1>(saudacaoPeriodo)</h1>
    )

}

export default Saudacao;