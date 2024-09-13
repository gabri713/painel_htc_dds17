import React from 'react'
import Relogio from './Relogio'
import Saudacao from './Saudacao'

import styles from './Cabecalho.module.css'

function cabecalho() {
  return (
    <div className={styles.cabecalho}>
        <Saudacao />
      <Relogio />
    </div>
  )
}

export default cabecalho
