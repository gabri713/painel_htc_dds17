import React from 'react'

function AbreviaUC(props) {
    const unidade = prpos.unidade_curricular.split('');
    if (unidade.length==1){
        return unidade[0]
    }
    unidade.splice(-2,2);
    const abrev = unidade[0].substring(0,4);
  return (
    abrev+'. '+ unidade.pop()
   
  )
}

export default AbreviaUC
