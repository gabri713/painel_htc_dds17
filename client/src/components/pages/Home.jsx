
import React from 'react'

import LateralImagens from '../LateralImagens/LateralImagens';

import styles from './Home.module.css';

import Cabecalho from '../layout/Cabecalho';

import TabelaAulas from '../TabelaAulas/TabelasAulas';



function Home() {
  return (
    <>
      <Cabecalho/>
      <TabelaAulas/>
      <LateralImagens/>
    </>
  )
}

export default Home
