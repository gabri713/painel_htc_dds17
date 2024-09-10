import {useEffect, useState} from 'react';

function Relogio() {
    const [hora, setHora] = useState('');

    //useEffect acionado após carregamento da pagina
    useEffect(()=>{
        atualizaHorario();

        const intervalo = setInterval(atualizaHorario,1000);
        return() =>{
            clearInterval(intervalo);
        }
    });

    function atualizaHorario(){
        //Declarando objeto do tipo Date
        const agora = new Date();

        //Pegando hora minutos e segundos
        const horaMinutosSegundos = agora.toLocaleTimeString('pt-br',{hour: '2-digit', minute:'2-digit',second:'2-digit'} );
        setHora(horaMinutosSegundos);
    }
  return (
    // Chamando constante hora
    <div>{hora}</div>
  )
}

export default Relogio;
