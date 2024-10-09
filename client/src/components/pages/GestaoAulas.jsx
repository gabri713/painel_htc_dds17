import { useEffect, useState } from 'react';
import TabelaAulas from '../TabelaAulas/TabelaAulas';
import Navbar from '../layout/Navbar';
import {Link, useParams} from 'react-router-dom';


function GestaoAulas() {
  const {tipo} = useParams();
  const [tipoAlterado,setTipoAlterado]= useState(tipo);
  const [mostrarMensagem, setMostrarMensagem] = useState(true);
  const [classeMensagem, setClasseMensagem] = useState('');
  const [textoMensagem, setTextoMensagem] = useState('');


  useEffect(()=>{
    if (tipoAlterado){
      setMostrarMensagem(true);
      tipoMensagem();
      setTimeout(()=>{
        setMostrarMensagem(false);
      }, 5000);
    }
  },[tipo])

  function tipoMensagem(){
    switch(tipo){
      case 'cadastrada':
        setClasseMensagem('alert alert-success');
        setClasseMensagem('Aula Cadastrada');
        break;
        case 'editada':
        setClasseMensagem('alert alert-primary');
        setClasseMensagem('Aula Editada');
        break;
        case 'deletada':
        setClasseMensagem('alert alert-danger');
        setClasseMensagem('Aula Deletada');
        break;
    }

  }

  function handleDelete(){
    tipo = 'deletada'
  }
  return (
    <>
      <Navbar/>
      <div className='container'>
        <h1 className='text-center my-3'>Gestão Aulas</h1>
       {mostrarMensagem && <div className={classeMensagem}>{textoMensagem}</div>}
        <div className='text-end'>
          <Link className='btn btn-primary mb-3' to='/cadastro_aula'>Cadastro Aula</Link>
        </div>
      <TabelaAulas tipo='edit' onDeleteSucess={handleDelete}/>
      
    </div>
    </>
  );
}

export default GestaoAulas;
