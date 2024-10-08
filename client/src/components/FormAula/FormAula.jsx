import {useEffect, useState} from 'react' 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function FormAula({titulo, txtBtn,handleSubmit,id}) {
    const navigate = useNavigate () ;
  const  [dataAula, setDataAula] = useState("");
  const [horainicio, setHoraInicio] = useState("");
  const [horafim, setHoraFim] = useState("");
  const [turma, setTurma] = useState("");
  const [instrutor, setInstrutor] = useState("");
  const [unidadecurricular, setUnidadeCurricular] = useState("");
  const [ambiente, setAmbiente] = useState("");

  useEffect(()=>{
    if(id){
        baixarAula(id)
    }
  },[]);

  //Funçao temporaria para cadastro de data
  function formatDataHora(data, hora) {
    const dataHora = `${data}T${hora}:00.000Z`;
    return dataHora;
  }
  async function baixarAula(id){
    try{
        const resposta = await fetch(`http://localhost:5000/aulas/${id}`,{
            method:'GET', 
            headers:{
                'Content-Type':'application.json'
            }
        });
        const respostaJSON = await resposta.
    }

  }
  


  function submit(e){
    e.preventDefault();
  const infoAula = {
    data: formatDataHora(dataAula, "00:00"),
    data_hora_inicio: formatDataHora(dataAula, horainicio),
    data_hora_fim: formatDataHora(dataAula, horafim),
    //data: dataAula,
    //data_hora_inicio: horainicio,
    //data_hora_fim: horafim,
    turma: turma,
    instrutor: instrutor,
    unidade_curricular: unidadecurricular,
    ambiente: ambiente,
    chave: null,
  };
  handleSubmit(infoAula,id);
  navigate('/gestao_aulas')
  }
  return (
    <div>
        <div className="conteiner justify-content-center col-sm-12 col-md-6 col-lg-3">
        <h1 className="text-center">Adicionar Aula</h1>
        <form onSubmit={cadastrarAula}>
          <label className="form-label" htmlFor="">
            Data:
          </label>
          <input
            className="form-control"
            type="date"
            name=""
            id=""
            value={dataAula}
            onChange={(e) => setDataAula(e.target.value)}
          />
          <label className="form-label" htmlFor="">
            Hora Inicio:
          </label>
          <input
            className="form-control"
            type="time"
            name=""
            id=""
            value={horainicio}
            onChange={(e) => setHoraInicio(e.target.value)}
          />
          <label className="form-label" htmlFor="">
            Hora Fim:
          </label>
          <input
            className="form-control"
            type="time"
            name=""
            id=""
            value={horafim}
            onChange={(e) => setHoraFim(e.target.value)}
          />
          <label className="form-label" htmlFor="">
            Turma:
          </label>
          <input
            className="form-control"
            type="text"
            name=""
            id=""
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
          />
          <label className="form-label" htmlFor="">
            Instrutor:
          </label>
          <input
            className="form-control"
            type="text"
            name=""
            id=""
            value={instrutor}
            onChange={(e) => setInstrutor(e.target.value)}
          />
          <label className="form-label" htmlFor="">
            Unidade Curricular:
          </label>
          <input
            className="form-control"
            type="text"
            name=""
            id=""
            value={unidadecurricular}
            onChange={(e) => setUnidadeCurricular(e.target.value)}
          />
          <label className="form-label" htmlFor="">
            Ambiente:
          </label>
          <input
            className="form-control"
            type="text"
            name=""
            id=""
            value={ambiente}
            onChange={(e) => setAmbiente(e.target.value)}
          />
          <Link className="btn btn-danger" to="/login">
            Calcelar
          </Link>
          <button className="btn btn-success mt-2 float-end" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
      
    </div>
  )
}

export default FormAula
